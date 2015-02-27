var fs = require("fs"),
    path = require("path"),
    mkdirp = require("mkdirp"),
    crypto = require("crypto"),
    _ = require("underscore"),
    templates_path = path.resolve(__dirname, "../templates/"),
    prevStepTimeFinish = 0,
    time = {
        file: {},
        feature: {}
    };
    statistics = {
        files_total: 0,
        files_passed: 0,
        files_failed: 0,
        files_skipped: 0,
        features_total: 0,
        features_passed: 0,
        features_failed: 0,
        features_skipped: 0,
        steps_total: 0,
        steps_passed: 0,
        steps_failed: 0,
        using_grunt: global.__using_grunt
    },
    tags = {};

function compileReport(basePath) {
    var htmlFile = path.join(basePath, "reporter.htm"),
        jsonData = collectData(basePath),
        dynamicData = generateHTML(jsonData),
        res;

    try {
        res = fs.writeFileSync(htmlFile, dynamicData);
    } catch (e) {
        console.error("fail:", e.message);
    }
}

function collectData(basePath) {
    var json, files = fs.readdirSync(basePath), file, currentData = {}, file_path, content;

    _.chain(files)
    .filter(function(file) {
        return path.extname(file) === ".json" && file !== "combined.json";
    }).sortBy(function(file) {
        return new Date(fs.statSync(basePath + "/" + file).mtime).getTime() / 1000;
    }).each(function(file) {
        file_path = path.join(basePath, file);
        content = fs.readFileSync(file_path, {encoding: "utf8"});
        try {
            json = JSON.parse(content);
        } catch (e) {}
        try {
            currentData = parseMetaData(currentData, json);
//            res = fs.writeFileSync(basePath + "/" + i + ".json", JSON.stringify(currentData));
        } catch (e) {
            console.error("Error.", e.stack);
        }
    });

    res = fs.writeFileSync(basePath + "/combined.json", JSON.stringify(currentData));
    return currentData;
}

/** Function: storeScreenShot
 * Stores base64 encoded PNG data to the file at the given path.
 *
 * Parameters:
 *     (String) data - PNG data, encoded in base64
 *     (String) file - Target file path
 */
function storeScreenShot(data, file) {
    var stream = fs.createWriteStream(file);

    stream.write(new Buffer(data, "base64"));
    stream.end();
}

function generateHTML(data) {
    var html = fs.readFileSync(templates_path + "/report.html", {
        encoding: "utf8"
    }), table = fs.readFileSync(templates_path + "/table.html", {
        encoding: "utf8"
    }), table_statistics = fs.readFileSync(templates_path + "/statistics.html", {
        encoding: "utf8"
    });
    
    return _.template(html,{
        table: _.template(table, {
            table_contents: renderFiles(data)
        }),
        select: renderSelect(tags),
        table_statistics: _.template(table_statistics, {
            statistics: statistics,
            totalTime: (prevStepTimeFinish / 1000)
        })
    });
}

function renderFiles(files) {
    var file, i, array = [], skipped,
        template = fs.readFileSync(templates_path + "/row_between_features.html", {
            encoding: "utf8"
        });
    
    //Render only failed here
    for(i in files) {
        file = files[i];
        statistics.files_total++;
        skipped = true;
        for(i in file.features) {
            statistics.features_total++;
            if (!file.features[i].skipped) {
                skipped = false;
            } else {
                statistics.features_skipped++;
            }
        }
        file.skipped = skipped;
        if (!file.skipped && !file.passed) {
            statistics.files_failed++;
            array.push(renderFile(file, i));
        }
    }
    
    //Render only passed here
    for(i in files) {
        file = files[i];
        if (file.passed) {
            if (!file.skipped) {
                statistics.files_passed++;
                array.push(renderFile(file, i));
            }
        }
    }
    
    //Render only skipped here if needed
    if (!global.__using_grunt) {
        for(i in files) {
            file = files[i];
            if (file.skipped) {
                statistics.files_skipped++;
                array.push(renderFile(file, i));
            }
        }
    }
    
    return array.join(template);
}

function renderFile(file, key) {
    var array = [], args = {},
        template = fs.readFileSync(templates_path + "/row_file_name.html", {
            encoding: "utf8"
        }),
        features = renderFeatures(file.features), skipped = file.skipped;

    args = {
        file: file,
        skipped: skipped,
        bgColor: skipped ? "#6699CC" : (file.passed ? "green" : "red"),
        time: ((time.file[key].finish - time.file[key].start) / 1000),
    };
    
    array.push(_.template(template,args));
    array.push(features);
    
    return array.join("");
}

function renderFeatures(features) { 
    var feature, array = [], feature_id,
        template = fs.readFileSync(templates_path + "/row_between_features.html", {
            encoding: "utf8"
        });
    
    if (typeof features === "undefined" || features.length < 1) {
        return;
    }
    for (feature_id in features) {
        feature = features[feature_id];
        if (!feature.passed) {
            statistics.features_failed++;
            array.push(renderFeature(feature, feature_id));
        }
    }
    
    for (feature_id in features) {
        feature = features[feature_id];
        if (feature.passed) {
            if (!feature.skipped) {
                statistics.features_passed++;
            }
            array.push(renderFeature(feature, feature_id));
        }
    }
    
    return array.join(template);
}

function renderFeature(feature, feature_id) {
    var feature_name, show_tags, colspan, 
        template = fs.readFileSync(templates_path + "/row_feature.html", {
            encoding: "utf8"
        }),
        subFeatures = renderSubFeatures(feature.subFeatures, feature_id),
        array = [], tags_splited, i, tag, classnames = ["feature_tags _feature_" + feature_id], args = {};
    
    feature_name = feature.name.split(" Tags: ");
    show_tags = false;
    colspan = 19;
    
    if (feature_name.length > 1) {
        colspan = 14;
        show_tags = true;
        tags_splited = feature_name[1].split(", ");
        for (i in tags_splited) {
            tag = tags_splited[i].replace(/\.$/, "").replace(/^'/, "").replace(/'$/, "");
            if(typeof tags[tag] === "undefined") {
                tags[tag] = tag;
            }
            classnames.push(tag);
        }
    } 
    
    args = {
        classnames: classnames,
        colspan: colspan,
        bgColor: feature.skipped ? "#6699CC" : (feature.passed ? "green" : "red"),
        feature_name: feature_name,
        show_tags: show_tags,
        feature_id: feature_id,
        feature: feature,
        time: ((time.feature[feature_id].finish - time.feature[feature_id].start) / 1000),
    };
    
    array.push(_.template(template, args));
    array.push(subFeatures);
    
    return array.join("");
}

function renderSubFeatures(features, feature_id) { 
    var feature, array = [], i, 
        template = fs.readFileSync(templates_path + "/row_between_subfeatures.html", {
            encoding: "utf8"
        });
    
    for (i in features) {
        feature = features[i];
        array.push(renderSubFeature(feature, feature_id));
    }
    
    return array.join(_.template(template, {feature_id: feature_id}));
}

function renderSubFeature(feature, feature_id) {
    var array = [], 
        args = {},
        template = fs.readFileSync(templates_path + "/row_subfeature.html", {
            encoding: "utf8"
        }),
        steps = renderSteps(feature.steps, feature_id);
    
    args = {
        feature_id: feature_id,
        bgColor: feature.passed ? "green" : "red",
        feature: feature,
        time: ((time.feature[feature_id].finish - time.feature[feature_id].start) / 1000),
    };
    
    array.push(_.template(template,args));
    array.push(steps);
    
    return array.join("");
}

function renderSteps(steps, feature_id) {
    var step, k, array = [], args = {},
        template = fs.readFileSync(templates_path + "/row_step.html", {
            encoding: "utf8"
        });
    
    for (k in steps) {
        step = steps[k];
        args = {
            feature_id: feature_id,
            step: step,
            screenshot_only_on_fail: _tf_config._system_.screenshot_only_on_fail,
            filepath: path.basename(step.screenShotFile),
            bgColor: step.passed? "green": (step.skipped ? "#6699CC" : "red"),
            length: step.results.items_.length,
            time: ((step.finishTime - step.startTime) / 1000)
        };
        
        statistics.steps_total++;
        if (step.passed) {
            statistics.steps_passed++;
        } else {
            statistics.steps_failed++;
        }
        
        array.push(_.template(template, args));
        if (step.results.items_.length > 0) {
            array.push(renderItems(step.results.items_, step.step_id, feature_id));
        }
    }
    
    return array.join("");
}

function renderItems(items, step_id, feature_id) {
    var l, array = [], args = {}, 
        template = fs.readFileSync(templates_path + "/row_item.html", {
            encoding: "utf8"
        });
    
    for (l in items) {
        items[l].message = htmlEscape(items[l].message);
        args = {
            expect: items[l],
            step_id: step_id,
            feature_id: feature_id,
            bgColor: items[l].passed_? "green": (items[l].skipped ? "#6699CC" : "red"),
            passed: (items[l].passed_ ? "Passed" : (items[l].skipped ? "Skipped" : "Failed"))
        };
        
        array.push(_.template(template, args));
    }
    
    return array.join("");
}

function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

function renderSelect() {
    var template = fs.readFileSync(templates_path + "/select.html", {
        encoding: "utf8"
    });
    
    tags = _.sortBy(tags, function(tag) {return tag; });
    
    return _.template(template, {tags:tags});
}

function addHTMLReport(jsonData, baseName){
    var basePath = path.dirname(baseName),
        htmlFile = path.join(basePath, "reporter.html"),
        stream,
        dynamicData = generateHTML(jsonData);

    stream = fs.createWriteStream(htmlFile);
    stream.write(dynamicData);
    stream.end();
}

function addMetaData(metaData, baseName){
    var json,
        stream,
        basePath = path.dirname(baseName),
        file = path.join(basePath,"combined.json");

    try {
        json = metaData;
        var currentData;
        try {
            currentData = JSON.parse(fs.readFileSync(file, {
                encoding: "utf8"
            }));
            currentData = parseMetaData(currentData, json);
            json = currentData;
        } catch(e) {
            json = parseMetaData({}, json);;
        }

        stream = fs.createWriteStream(file);
        stream.write(JSON.stringify(json));
        stream.end();
        addHTMLReport(json, baseName);
    } catch(e) {
        console.error("Could not save meta data: \n" + e.message);
    }

}

function parseMetaData(current, new_data) {
    var descs = new_data.description, 
        p_id = new_data.parent_suite_id,
        s_id = new_data.suite_id,
        st_id = new_data.step_id,
        startTime = new_data.startTime,
        finishTime = new_data.finishTime,
        sk_id,
        passed = true, i, 
        descs_0, 
        descs_1,
        descs_2;

    if (finishTime > prevStepTimeFinish) {
        prevStepTimeFinish = finishTime;
    }
    
    for (i in new_data.results.items_) {
        if (new_data.results.items_[i].passed_ === false) {
            passed = false;
            break;
        }
    }
    
    descs_0 = makeSafeForCSS(descs[0]);
    
    if (typeof current[descs_0] === "undefined") {
        current[descs_0] = {
            name: descs[0],
            features: {},
            passed: passed,
            id: p_id
        };
    }
    if (typeof time.file[descs_0] === "undefined") {
        time.file[descs_0] = {
            start: startTime,
            finish: finishTime
        };
    }
    
    if (time.file[descs_0].start > startTime) {
        time.file[descs_0].start = startTime;
    }
    if (time.file[descs_0].finish < finishTime) {
        time.file[descs_0].finish = finishTime;
    }
    
    current[descs_0].finishTime = prevFileTimeFinish = finishTime;
    if (!passed) {
        current[descs_0].passed = false;
    }
    
    sk_id = p_id;
    if (descs[2] === "Skipped") {
        if (global.__using_grunt) {
            return current;
        }
        descs[1] = descs[1].split("Tags").join(" ~Skipped~ Tags");
        sk_id = s_id;
    } 
    
    descs_1 = makeSafeForCSS(descs[1]);
    
    if (typeof current[descs_0].features[descs_1] === "undefined") {
        current[descs_0].features[descs_1] = {
            name: descs[1].replace(/^\s+|\s+$/g, ""),
            passed: passed,
            id: s_id,
            skipped: descs[2] === "Skipped" ? true : false,
            subFeatures: {}
        };
    }
    if (typeof time.feature[descs_1] === "undefined") {
        time.feature[descs_1] = {
            start: startTime,
            finish: finishTime
        };
    }
    
    if (time.feature[descs_1].start > startTime) {
        time.feature[descs_1].start = startTime;
    }
    if (time.feature[descs_1].finish < finishTime) {
        time.feature[descs_1].finish = finishTime;
    }
    if (!passed) {
        current[descs_0].features[descs_1].passed = false;
    }
    
    descs_2 = makeSafeForCSS(descs[2]);
    
    if (typeof current[descs_0].features[descs_1].subFeatures[descs_2] === "undefined") {
        if (descs[2] !== "Skipped") {
            current[descs_0].features[descs_1].subFeatures[descs_2] = {
                name:  descs[2].replace(/^\s+|\s+$/g, ""),
                passed: passed,
                steps: {}
            };
        }
    }
    if (descs[2] !== "Skipped") {
        if (typeof time.feature[descs_1] === "undefined") {
            time.feature[descs_1] = {
                start: startTime,
                finish: finishTime
            };
        }

        if (time.feature[descs_1].start > startTime) {
            time.feature[descs_1].start = startTime;
        }
        if (time.feature[descs_1].finish < finishTime) {
            time.feature[descs_1].finish = finishTime;
        }
    }
    if (!passed) {
        current[descs_0].features[descs_1].subFeatures[descs_2].passed = false;
    }
    if (typeof descs[3] !== undefined && descs[2] !== "Skipped") {
        current[descs_0].features[descs_1].subFeatures[descs_2].steps[st_id] = {
            step_id: st_id,
            name:  typeof descs[3] === undefined ? "" : descs[3].replace(/^\s+|\s+$/g, ""),
            results: new_data.results,
            os: new_data.os, 
            browser: new_data.browser,
            passed: new_data.passed,
            screenShotFile: new_data.screenShotFile,
            startTime: startTime,
            finishTime: finishTime
        };
    }
    
    return current;
}

/** Function: storeMetaData
 * Converts the metaData object to a JSON string and stores it to the file at
 * the given path.
 *
 * Parameters:
 *     (Object) metaData - Object to save as JSON
 *     (String) file - Target file path
 */
function storeMetaData(metaData, file) {
    var json,
        stream;

    try {
        json = JSON.stringify(metaData);
        stream = fs.createWriteStream(file);

        stream.write(json);
        stream.end();
    } catch(e) {
        console.error("Could not save meta data for " + screenShotFile);
    }
}

/** Function: gatherDescriptions
 * Traverses the parent suites of a test spec recursivly and gathers all
 * descriptions. Finally returns them as an array.
 *
 * Example:
 * If your test file has the following structure, this function returns an
 * array like ['My Tests', 'Module 1', 'Case A'] when executed for `Case A`:
 *
 *     describe('My Tests', function() {
 *         describe('Module 1', function() {
 *             it('Case A', function() { /* ... * / });
 *         });
 *     });
 *
 * Parameters:
 *     (Object) suite - Test suite
 *     (Array) soFar - Already gathered descriptions. On first call, pass an
 *                     array containing the specs description itself.
 *
 * Returns:
 *     (Array) containing the descriptions of all parental suites and the suite
 *             itself.
 */
function gatherDescriptions(suite, soFar) {
    soFar.push(suite.description);

    if(suite.parentSuite) {
        return gatherDescriptions(suite.parentSuite, soFar);
    } else {
        return soFar;
    }
}

/** Function: generateGuid
 * Generates a GUID using node.js' crypto module.
 *
 * Returns:
 *     (String) containing a guid
 */
function generateGuid() {
    var buf = new Uint16Array(8);
    buf = crypto.randomBytes(8);
    var S4 = function(num) {
        var ret = num.toString(16);
        while(ret.length < 4){
            ret = "0"+ret;
        }
        return ret;
    };

    return (
        S4(buf[0])+S4(buf[1])+"-"+S4(buf[2])+"-"+S4(buf[3])+"-"+
        S4(buf[4])+"-"+S4(buf[5])+S4(buf[6])+S4(buf[7])
    );
}

function makeSafeForCSS(name) {
    return name.replace(/[^a-z0-9]/g, function(s) {
        var c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
}

module.exports = {
    storeScreenShot: storeScreenShot,
    storeMetaData: storeMetaData,
    gatherDescriptions: gatherDescriptions,
    generateGuid: generateGuid,
    addMetaData: addMetaData,
    addHTMLReport: addHTMLReport,
    compileReport: compileReport
};