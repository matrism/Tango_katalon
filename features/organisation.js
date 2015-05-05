var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;


require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");

require(pages_path + "deal");
require(steps_path + "deal");

require(pages_path + "deal_general");
require(steps_path + "deal_general");

require(pages_path + "deal_contract_period");
require(steps_path + "deal_contract_period");

require(pages_path + "deal_scope");
require(steps_path + "deal_scope");

//require(pages_path + "incomeProvider");
require(steps_path + "incomeProvider");

require(pages_path + "organisation");
require(steps_path + "organisation");

require(pages_path + "searchSection");
require(steps_path + "searchSection");

var beforeFeature = function () {
        steps.login.itLogin();
        steps.searchSection.accessSavedOrganisationByName("BMI");

    },

    feature = [{
        name: "I would like to add multiple Income Providers to Organisation",
        tags: ["manual"],
        steps: function () {

            steps.organisation.openIncomeProviderEdit();

         //   steps.organisation.pause();


            steps.organisation.chooseIncomeFileType("BMI");
            steps.organisation.addIncomeProvidersToOrganisation(
                [
                    ["Inbound Income Type","Inbound Income Type Description","Income File Type","Tango Income Type"  ],
                    ["A&E","h","BMI","Mechanical"  ],
                    ["A&E HIS ESPANOL","h","BMI","Digital Mechanical"  ],
                    ["ABC","h","BMI","Mechanical"  ],
                    ["ABC FAMILY","h","BMI","Mechanical"  ],
                    ["ACTION MAX","h","BMI","Mechanical"  ],
                    ["AIRTRAN","h","BMI","Mechanical"  ],
                    ["AL JAZEERA AMER","h","BMI","TV Performance"  ],
                    ["ALASKA","h","BMI","Mechanical"  ],
                    ["ALLTEL RBT","h","BMI","Mechanical"  ],
                    ["AMC","h","BMI","Mechanical"  ],
                    ["AMERICAN","h","BMI","Mechanical"  ],
                    ["AMERICAN HEROES","h","BMI","TV Synch"  ],
                    ["AMI ENTERTAINMT","h","BMI","Mechanical"  ],
                    ["ANIMAL PLANET","h","BMI","Mechanical"  ],
                    ["AT MAX","h","BMI","Mechanical"  ],
                    ["AUDIENCE NETWK","h","BMI","Mechanical"  ],
                    ["AXS TV","h","BMI","Mechanical"  ],
                    ["BATANGA","h","BMI","Mechanical"  ],
                    ["BBC AMERICA","h","BMI","Mechanical"  ],
                    ["BET","h","BMI","Mechanical"  ],
                    ["BIOGRAPHY","h","BMI","Mechanical"  ],
                    ["BLANKET","h","BMI","Mechanical"  ],
                    ["BMILIVE","h","BMI","Mechanical"  ],
                    ["BOOMERANG","h","BMI","Mechanical"  ],
                    ["BRAVO","h","BMI","Mechanical"  ],
                    ["CABLE","h","BMI","Mechanical"  ],
                    ["CARE MAIL","h","BMI","Mechanical"  ],
                    ["CARTOON","h","BMI","Mechanical"  ],
                    ["CBS","h","BMI","Digital Mechanical"  ],
                    ["CBS COLL SPORTS","h","BMI","Mechanical"  ],
                    ["CCNECN","h","BMI","Mechanical"  ],
                    ["CCS INT & PREM","h","BMI","Mechanical"  ],
                    ["CENTRIC","h","BMI","Mechanical"  ],
                    ["CHILLER","h","BMI","Mechanical"  ],
                    ["CINEMA","h","BMI","Mechanical"  ],
                    ["CINEMAX","h","BMI","Mechanical"  ],
                    ["CLO TV","h","BMI","Mechanical"  ],
                    ["CLOO TV","h","BMI","Mechanical"  ],
                    ["CMS","h","BMI","Mechanical"  ],
                    ["CMTV","h","BMI","Mechanical"  ],
                    ["CNBC","h","BMI","Mechanical"  ],
                    ["CNN","h","BMI","Mechanical"  ],
                    ["CNN HEADLINE","h","BMI","TV Synch"  ],
                    ["COLLEGE RADIO","h","BMI","Mechanical"  ],
                    ["COMCAST SPORTS","h","BMI","Mechanical"  ],
                    ["COMEDY CENTRAL","h","BMI","Mechanical"  ],
                    ["COMM RADIO","h","BMI","Mechanical"  ],
                    ["CONCERT RADIO","h","BMI","Mechanical"  ],
                    ["CONTINENTAL","h","BMI","Mechanical"  ],
                    ["CRACKLE","h","BMI","Mechanical"  ],
                    ["CRICKETRBT","h","BMI","Mechanical"  ],
                    ["CRIME & INVEST","h","BMI","Mechanical"  ],
                    ["CURRENT TV","h","BMI","Mechanical"  ],
                    ["CW","h","BMI","TV Performance"  ],
                    ["DELTA-NORTHWEST","h","BMI","Mechanical"  ],
                    ["DEST AMERICA","h","BMI","Mechanical"  ],
                    ["DIGITAL MUS EXP","h","BMI","Digital Mechanical"  ],
                    ["DINEY XD","h","BMI","Digital Mechanical"  ],
                    ["DISC ESPANOL","h","BMI","Mechanical"  ],
                    ["DISC FIT HEALTH","h","BMI","Mechanical"  ],
                    ["DISC MILITARY","h","BMI","Digital Mechanical"  ],
                    ["DISCOVERY","h","BMI","Ringtone Mechanical"  ],
                    ["DISH CD","h","BMI","Download Mechanical"  ],
                    ["DISNEY","h","BMI","Digital Streaming Mechanical"  ],
                    ["DISNEY JR","h","BMI","Digital Mechanical"  ],
                    ["DISNEY XD","h","BMI","Digital Mechanical"  ],
                    ["DMX","h","BMI","Karaoke Mechanical"  ],
                    ["ENCOR INDIEPLEX","h","BMI","Mechanical Performance"  ],
                    ["ENCOR MOVIEPLEX","h","BMI","Mechanical"  ],
                    ["ENCOR RETROPLEX","h","BMI","Mechanical"  ],
                    ["ENCORE","h","BMI","Mechanical"  ],
                    ["ENCORE ACTION","h","BMI","Mechanical"  ],
                    ["ENCORE BLACK","h","BMI","Mechanical"  ],
                    ["ENCORE CLASSIC","h","BMI","Mechanical"  ],
                    ["ENCORE DRAMA","h","BMI","Mechanical"  ],
                    ["ENCORE LOVE","h","BMI","Mechanical"  ],
                    ["ENCORE MYSTERY","h","BMI","Mechanical"  ],
                    ["ENCORE WAM","h","BMI","Mechanical"  ],
                    ["ENCORE WESTERNS","h","BMI","Mechanical"  ],
                    ["ENTERTAINMENT","h","BMI","Mechanical"  ],
                    ["EPIX","h","BMI","Mechanical"  ],
                    ["ESQUIRE NETWORK","h","BMI","Mechanical"  ],
                    ["FAMILY NET","h","BMI","TV Synch"  ],
                    ["FILM","h","BMI","Mechanical"  ],
                    ["FIVE STAR MAX","h","BMI","Mechanical"  ],
                    ["FLIX","h","BMI","Mechanical"  ],
                    ["FOX","h","BMI","Mechanical"  ],
                    ["FOX MOVIES","h","BMI","Mechanical"  ],
                    ["FOX SPORTS","h","BMI","Mechanical"  ],
                    ["FOX SPORTS 1","h","BMI","Mechanical"  ],
                    ["FOX SPORTS 2","h","BMI","Mechanical"  ],
                    ["FRONTIER","h","BMI","Mechanical"  ],
                    ["FUEL & FOX SP 2","h","BMI","Mechanical"  ],
                    ["FUSE TV","h","BMI","Mechanical"  ],
                    ["FX NETWORK","h","BMI","Mechanical"  ],
                    ["FXX","h","BMI","Mechanical"  ],
                    ["G4 TECH TV","h","BMI","Mechanical"  ],
                    ["GALAVISION","h","BMI","Mechanical"  ],
                    ["GENERAL","h","BMI","Mechanical"  ],
                    ["GOLF","h","BMI","Mechanical"  ],
                    ["GREAT AMER CTRY","h","BMI","Mechanical"  ],
                    ["GSN","h","BMI","Mechanical"  ],
                    ["H2","h","BMI","Mechanical"  ],
                    ["HALLMARK","h","BMI","Mechanical"  ],
                    ["HALLMARK MOVIE","h","BMI","Mechanical"  ],
                    ["HALOGEN TV","h","BMI","Mechanical"  ],
                    ["HAWAIIAN","h","BMI","Mechanical"  ],
                    ["HBO","h","BMI","Mechanical"  ],
                    ["HBO COMEDY","h","BMI","Mechanical"  ],
                    ["HBO FAMILY","h","BMI","Mechanical"  ],
                    ["HBO LATINO","h","BMI","Mechanical"  ],
                    ["HBO PLUS","h","BMI","Mechanical"  ],
                    ["HBO SIGNATURE","h","BMI","Mechanical"  ],
                    ["HBO ZONE","h","BMI","Mechanical"  ],
                    ["HDNET","h","BMI","Mechanical"  ],
                    ["HDNET MOVIES","h","BMI","Mechanical"  ],
                    ["HEADLINER","h","BMI","Mechanical"  ],
                    ["HEARTS OF SPACE","h","BMI","Mechanical"  ],
                    ["HISTORY","h","BMI","Mechanical"  ],
                    ["HTV","h","BMI","Mechanical"  ],
                    ["HULU","h","BMI","Mechanical"  ],
                    ["ID DISCOVERY","h","BMI","Mechanical"  ],
                    ["INDEPEND FILM","h","BMI","Mechanical"  ],
                    ["INSPIRATION","h","BMI","Mechanical"  ],
                    ["INTERNET","h","BMI","Mechanical"  ],
                    ["ION CABLE","h","BMI","Mechanical"  ],
                    ["ITUNES RADIO","RADIO","BMI","Radio Performance"  ],
                    ["JETBLUE","h","BMI","Mechanical"  ],
                    ["LIFETIME","h","BMI","Mechanical"  ],
                    ["LIFETIME MOVIE","h","BMI","Mechanical"  ],
                    ["LIFETIME WOMEN","h","BMI","Mechanical"  ],
                    ["LIVE 365","h","BMI","Digital Mechanical"  ],
                    ["LIVE 365 1Q2013","h","BMI","Mechanical"  ],
                    ["LIVE 365 2Q2013","h","BMI","Mechanical"  ],
                    ["LIVE 365 3Q2013","h","BMI","Mechanical"  ],
                    ["LOCAL NPR","h","BMI","Mechanical"  ],
                    ["LOGO","h","BMI","Mechanical"  ],
                    ["MILITARY HIST","h","BMI","Mechanical"  ],
                    ["MLB","h","BMI","Mechanical"  ],
                    ["MORE MAX","h","BMI","Mechanical"  ],
                    ["MOVIE CHANNEL","h","BMI","Mechanical"  ],
                    ["MOVIE CHANNEL 2","h","BMI","Mechanical"  ],
                    ["MSNBC","h","BMI","Mechanical"  ],
                    ["MTV","h","BMI","Mechanical"  ],
                    ["MTV HITS","h","BMI","Mechanical"  ],
                    ["MTV TR3S","h","BMI","Mechanical"  ],
                    ["MTV2","h","BMI","Mechanical"  ],
                    ["MTVU","h","BMI","Mechanical"  ],
                    ["MUN2","h","BMI","Mechanical"  ],
                    ["MUSIC CHOICE","h","BMI","Mechanical"  ],
                    ["MUZAK","h","BMI","Mechanical"  ],
                    ["NATH AMERICAN","h","BMI","Mechanical"  ],
                    ["NATL GEO EXPLOR","h","BMI","Mechanical"  ],
                    ["NATL GEO WILD","h","BMI","Mechanical"  ],
                    ["NBA TV","h","BMI","Mechanical"  ],
                    ["NBC","h","BMI","Mechanical"  ],
                    ["NBC SPORTS NET","h","BMI","Mechanical"  ],
                    ["NCTA","h","BMI","Mechanical"  ],
                    ["NETFLIX","h","BMI","Mechanical"  ],
                    ["NETWORK","h","BMI","Mechanical"  ],
                    ["NETWORK NPR","h","BMI","Mechanical"  ],
                    ["NETWORK PRI","h","BMI","Mechanical"  ],
                    ["NFL NETWORK","h","BMI","Mechanical"  ],
                    ["NICK JR","h","BMI","Mechanical"  ],
                    ["NICKELODEON","h","BMI","Mechanical"  ],
                    ["NICKTOONS","h","BMI","Mechanical"  ],
                    ["NORTH AMERICAN","h","BMI","Mechanical"  ],
                    ["NUVO TV","h","BMI","Mechanical"  ],
                    ["OPENING ACT","h","BMI","Mechanical"  ],
                    ["OUTER MAX","h","BMI","Mechanical"  ],
                    ["OWN","h","BMI","Mechanical"  ],
                    ["OXYGEN","h","BMI","Mechanical"  ],
                    ["PALLADIA","h","BMI","Mechanical"  ],
                    ["PANDORA","h","BMI","Mechanical"  ],
                    ["PBS","h","BMI","Mechanical"  ],
                    ["PBS KIDS SPROUT","h","BMI","Digital Mechanical"  ],
                    ["PIVOT","h","BMI","Mechanical"  ],
                    ["PROJECTPLAYLIST","h","BMI","Mechanical"  ],
                    ["PURE COUNTRY","h","BMI","Mechanical"  ],
                    ["RADIO","h","BMI","Digital Mechanical"  ],
                    ["RARIO","h","BMI","Digital Mechanical"  ],
                    ["REELZCHANNEL","h","BMI","Digital Mechanical"  ],
                    ["RFD TV","h","BMI","TV Performance"  ],
                    ["RHAPSODY INTER","h","BMI","Digital Mechanical"  ],
                    ["RHAPSODY RADIO","h","BMI","Digital Mechanical"  ],
                    ["RINGBACK TONES","h","BMI","Digital Mechanical"  ],
                    ["RLTV","h","BMI","Mechanical"  ],
                    ["ROOT SPORTS","h","BMI","Mechanical"  ],
                    ["SAT RAD-BBCAM","h","BMI","Mechanical"  ],
                    ["SAT RAD-CNBC","h","BMI","Mechanical"  ],
                    ["SAT RAD-CNN","h","BMI","Mechanical"  ],
                    ["SAT RAD-CNNHLN","h","BMI","Mechanical"  ],
                    ["SAT RAD-FNEW","h","BMI","Digital Mechanical"  ],
                    ["SAT RAD-MSNBC","h","BMI","Mechanical"  ],
                    ["SAT RAD-NFLNET","h","BMI","Mechanical"  ],
                    ["SAT RAD-PLAYB","h","BMI","Mechanical"  ],
                    ["SAT RAD-TWC","h","BMI","Mechanical"  ],
                    ["SCIENCE","h","BMI","Mechanical"  ],
                    ["SHOWTIME","h","BMI","Mechanical"  ],
                    ["SHOWTIME 2","h","BMI","Mechanical"  ],
                    ["SHOWTIME 3","h","BMI","Mechanical"  ],
                    ["SHOWTIME BEYOND","h","BMI","Mechanical"  ],
                    ["SHOWTIME EXTREM","h","BMI","Mechanical"  ],
                    ["SHOWTIME FAMILY","h","BMI","Mechanical"  ],
                    ["SHOWTIME NEXT","h","BMI","Mechanical"  ],
                    ["SHOWTIME WOMEN","h","BMI","Mechanical"  ],
                    ["SIRIUS XM","h","BMI","Mechanical"  ],
                    ["SIRIUS XM COMM","h","BMI","Mechanical"  ],
                    ["SMITHSONIAN CH","h","BMI","Mechanical"  ],
                    ["SOAPNET","h","BMI","Mechanical"  ],
                    ["SONY MOVIE CH","h","BMI","Mechanical"  ],
                    ["SPEED CHANNEL","h","BMI","Mechanical"  ],
                    ["SPIKE TV","h","BMI","Mechanical"  ],
                    ["SPORTSNET NY","h","BMI","Mechanical"  ],
                    ["SPORTSSOUTH","h","BMI","Mechanical"  ],
                    ["SPOTIFY","h","BMI","Mechanical"  ],
                    ["SPRINT MSPOT RD","h","BMI","TV Performance"  ],
                    ["STARZ","h","BMI","Mechanical"  ],
                    ["STARZ CINEMA","h","BMI","Mechanical"  ],
                    ["STARZ COMEDY","h","BMI","Mechanical"  ],
                    ["STARZ EDGE","h","BMI","Mechanical"  ],
                    ["STARZ HD","h","BMI","Mechanical"  ],
                    ["STARZ INBLACK","h","BMI","Mechanical"  ],
                    ["STARZ KID & FAM","h","BMI","Mechanical"  ],
                    ["STYLE NETWORK","h","BMI","Mechanical"  ],
                    ["SUN COUNTRY","h","BMI","Mechanical"  ],
                    ["SUNDANCE","h","BMI","Mechanical"  ],
                    ["SUNSPORTS FL","h","BMI","Mechanical"  ],
                    ["SUPER STATION","h","BMI","Mechanical"  ],
                    ["SUPERSTATION","h","BMI","Mechanical"  ],
                    ["SYFY","h","BMI","Mechanical"  ],
                    ["T MOBILE RBT","h","BMI","Mechanical"  ],
                    ["TBS","h","BMI","Mechanical"  ],
                    ["TEENNICK","h","BMI","Mechanical"  ],
                    ["TELEMUNDO","h","BMI","Mechanical"  ],
                    ["TELEVISION","h","BMI","Mechanical"  ],
                    ["THE HUB","h","BMI","Mechanical"  ],
                    ["THRILLER MAX","h","BMI","Mechanical"  ],
                    ["TLC","h","BMI","Mechanical"  ],
                    ["TNT","h","BMI","Mechanical"  ],
                    ["TOUCHTUNES","h","BMI","Mechanical"  ],
                    ["TRINITY BRCST","h","BMI","Mechanical"  ],
                    ["TRUTV","h","BMI","Mechanical"  ],
                    ["TURNER CLS MOV","h","BMI","Mechanical"  ],
                    ["TV LAND","h","BMI","Mechanical"  ],
                    ["TV LOCAL BL","h","BMI","Mechanical"  ],
                    ["TV LOCAL PP","h","BMI","Mechanical"  ],
                    ["TV ONE","h","BMI","Mechanical"  ],
                    ["TV PER PROGRAM","h","BMI","Mechanical"  ],
                    ["TVGN","h","BMI","Mechanical"  ],
                    ["UNI","h","BMI","Mechanical"  ],
                    ["UNIMAS","h","BMI","Mechanical"  ],
                    ["UNITED","h","BMI","Mechanical"  ],
                    ["UNIVERSAL HD","h","BMI","Mechanical"  ],
                    ["UP ENT","h","BMI","Mechanical"  ],
                    ["US AIRWAYS","h","BMI","Mechanical"  ],
                    ["USA NETWORK","h","BMI","Mechanical"  ],
                    ["VARIOUS","h","BMI","Mechanical"  ],
                    ["VELOCITY","h","BMI","Mechanical"  ],
                    ["VERIZON RBT","h","BMI","Mechanical"  ],
                    ["VH1","h","BMI","Mechanical"  ],
                    ["VH1 CLASSIC","h","BMI","Mechanical"  ],
                    ["VH1 SOUL","h","BMI","Mechanical"  ],
                    ["VIRGIN AMERICA","h","BMI","Mechanical"  ],
                    ["VIRGINMOBILE RB","h","BMI","Mechanical"  ],
                    ["WB","h","BMI","Mechanical"  ],
                    ["WEATHER CHANNEL","h","BMI","Mechanical"  ],
                    ["WEB TV NETWORK","h","BMI","Mechanical"  ],
                    ["WMODE RBT","h","BMI","Mechanical"  ],
                    ["WOMEN MAX","h","BMI","Mechanical"  ],
                    ["WOMENS ENT","h","BMI","Mechanical"  ],
                    ["WORLD AIRWAYS","h","BMI","Mechanical"  ],
                    ["YAHOO.COM","h","BMI","Mechanical"  ],
                    ["YOUTUBE","h","BMI","Mechanical"  ],
                    ["YOUTUBE 1Q2013","h","BMI","Mechanical"  ],
                    ["YOUTUBE 1Q2014","h","BMI","Mechanical"  ],
                    ["YOUTUBE 2Q2013","h","BMI","Mechanical"  ],
                    ["YOUTUBE 2Q2014","h","BMI","TV Performance"  ],
                    ["YOUTUBE 3Q2013","h","BMI","TV Performance"  ],
                    ["YOUTUBE 4Q2013","hh","BMI","TV Synch"  ]
                ],


                "Add new income provider with data :  %InboundIncomeType , %InboundIncomeTypeDescription ,%IncomeFileType ,%TangoIncomeType "
            );

            steps.organisation.saveIncomeProviders();
            steps.organisation.waitForProvidersSaveToComplete();


        }
    }









    ];


module.exports = {
    commonFeatureTags: ["organisation"],
    feature: feature,
    beforeFeature: beforeFeature
};