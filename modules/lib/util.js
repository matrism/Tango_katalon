var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    crypto = require('crypto'),
    scriptToAddInHtml,
    staticHTMLContentprefix,
    staticHTMLContentpostfix;

scriptToAddInHtml = "<script type='text/javascript'>";
scriptToAddInHtml +="function openModal(imageSource){";
scriptToAddInHtml +="var myWindow = window.open('','screenshotWindow');";
scriptToAddInHtml +="myWindow.document.write('<img src=\"' +imageSource + '\" alt=\"screenshot\" />');}";
scriptToAddInHtml += "</script>";
scriptToAddInHtml += "<style>";
scriptToAddInHtml += "th {";
scriptToAddInHtml += "    min-width: 20px;";
scriptToAddInHtml += "}";
scriptToAddInHtml += "td.noBottomTopBorder {";
scriptToAddInHtml += "    border-top: 0px !important;";
scriptToAddInHtml += "    border-bottom: 0px !important;";
scriptToAddInHtml += "}";
scriptToAddInHtml += "</style>";

staticHTMLContentprefix = "<html><head><title>Test file reporter generated</title>"+scriptToAddInHtml+" </head><body style='font-family:Arial;'>";
staticHTMLContentprefix += "<h1>Test Results</h1><table cellpadding='10' cellspacing='0' border='1' style='text-align:left'>";
staticHTMLContentprefix += "<tr>";
staticHTMLContentprefix += "<th></th><th></th><th></th>";
staticHTMLContentprefix += "<th colspan='4'>Assert type</th>";
staticHTMLContentprefix += "<th colspan='4'>Matcher</th>";
staticHTMLContentprefix += "<th colspan='4'>Expected</th>";
staticHTMLContentprefix += "<th colspan='4'>Actual</th>";
staticHTMLContentprefix += "<th colspan='5'>Message</th>";
staticHTMLContentprefix += "<th colspan='2'>Passed</th>";
staticHTMLContentprefix += "</tr>";

staticHTMLContentpostfix = "</table></body></html>";

/** Function: storeScreenShot
 * Stores base64 encoded PNG data to the file at the given path.
 *
 * Parameters:
 *     (String) data - PNG data, encoded in base64
 *     (String) file - Target file path
 */
function storeScreenShot(data, file) {
    var stream = fs.createWriteStream(file);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

function generateHTML(data) {
    return renderFiles(data);
}

function renderFiles(files) {
    var bgColor, file, i, array = [];
    
    for(i in files) {
        file = files[i];
        bgColor = file.passed? 'green': 'red';
        
        array.push(
            '<tr>'+
            '<td colspan="24"><b>'+ file.name + '</b></td>'+
            '<td colspan="2" style="color:#fff;background-color: '+ bgColor+'">' + file.passed + '</td>'+
            '</tr>'+
            renderFeatures(file.features)
        );
    }
    
    return array.join("<tr><td colspan='26'></td></tr>");
}

function renderFeatures(features) { 
    var bgColor, feature, j, step, k, array = [];
    
    for (j in features) {
        feature = features[j];

        bgColor = feature.passed? 'green': 'red';

        array.push(
            '<tr>' +
            '<td class="noBottomTopBorder"></td>' +
            '<td colspan="23" style="color:'+ bgColor+'">Feature: '+ feature.name + '</td>' +
            '<td colspan="2" style="color:#fff;background-color: '+ bgColor+'">' + feature.passed + '</td>' +
            '</tr>' +
            renderSteps(feature.steps)
        );
        
    }
    
    return array.join("<tr><td colspan='26'></td></tr>");
}

function renderSteps(steps) {
    var bgColor, step, k, array = [];
    
    for (k in steps) {
        step = steps[k];

        bgColor = step.passed? 'green': (step.skipped ? 'blue' : 'red');
        array.push(
            '<tr>' +
            '<td colspan="2" class="noBottomTopBorder"></td>' +
            '<td colspan="13">Step: '+ step.name + '</td>' +
            '<td colspan="4">OS: '+ step.os + ', Browser: ' + step.browser.name+ ':' +step.browser.version + '</td>' +
            '<td colspan="5"><a href="#" onclick="openModal(\'' + path.basename(step.screenShotFile)+ '\')">View Screenshot</a></td>' +
            '<td colspan="2" style="color:#fff;background-color: '+ bgColor+'">' + step.passed + '</td>' +
            '</tr>' +
            (step.results.items_.length < 1 
                ?
                ''
                :
                renderItems(step.results.items_)
            )
        );
    }
    
    return array.join("");
}

function renderItems(items) {
    var l, expect, bgColor, array = [], passed;
    
    for (l in items) {
        expect = items[l];
        bgColor = expect.passed_? 'green': (expect.skipped ? 'blue' : 'red'),
        passed = (expect.passed_ ? "Passed" : (expect.skipped ? 'Skipped' : 'Failed'));

        array.push(
            '<tr>'+
            '<td colspan="3" class="noBottomTopBorder"></td>'+
            '<td colspan="4">' + expect.type + '</td>'+
            '<td colspan="4">' + expect.matcherName + '</td>'+
            '<td colspan="4">' + expect.expected + '</td>'+
            '<td colspan="4">' + expect.actual + '</td>'+
            '<td colspan="5">' + expect.message + '</td>'+
            '<td colspan="2" style="color:#fff;background-color: '+ bgColor+'">' + passed + '</td>'+
            '</tr>'
        );
    }
    
    return array.join("");
}


function addHTMLReport(jsonData, baseName){
    var basePath = path.dirname(baseName),
        htmlFile = path.join(basePath, 'reporter.html'),
        stream,
        dynamicData = generateHTML(jsonData);

    stream = fs.createWriteStream(htmlFile);
    stream.write(staticHTMLContentprefix + dynamicData + staticHTMLContentpostfix);
    stream.end();
}

function addMetaData(metaData, baseName){
    var json,
        stream,
        basePath = path.dirname(baseName),
        file = path.join(basePath,'combined.json');

    try {
        json = metaData;
        var currentData;
        try {
            currentData = JSON.parse(fs.readFileSync(file, {
                encoding: 'utf8'
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
        console.error('Could not save meta data: \n' + e.message);
    }

}

function parseMetaData(current, new_data) {
    var descs = new_data.description, 
        p_id = new_data.parent_suite_id,
        s_id = new_data.suite_id,
        st_id = new_data.step_id,
        passed = true, i;
    
    for (i in new_data.results.items_) {
        if (new_data.results.items_[i].passed_ === false) {
            passed = false;
            break;
        }
    }
    
    if (typeof current[p_id] === "undefined") {
        current[p_id] = {
            name: descs[0].replace(/^\s+|\s+$/g, ""),
            passed: passed,
            features: {}
        };
    }
    if (!passed) {
        current[p_id].passed = false;
    }
    if (typeof current[p_id].features[s_id] === "undefined") {
        current[p_id].features[s_id] = {
            name: descs[1].replace(/^\s+|\s+$/g, ""),
            passed: passed,
            steps: {}
        };
    }
    if (!passed) {
        current[p_id].features[s_id].passed = false;
    }
    current[p_id].features[s_id].steps[st_id] = {
        name: descs[2].replace(/^\s+|\s+$/g, ""),
        results: new_data.results,
        os: new_data.os, 
        browser: new_data.browser,
        passed: new_data.passed,
        screenShotFile: new_data.screenShotFile
    };
    
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
        console.error('Could not save meta data for ' + screenShotFile);
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

module.exports = {
    storeScreenShot: storeScreenShot,
    storeMetaData: storeMetaData,
    gatherDescriptions: gatherDescriptions,
    generateGuid: generateGuid,
    addMetaData: addMetaData,
    addHTMLReport: addHTMLReport
};