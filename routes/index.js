var express = require('express');
var lodash = require('lodash');
var router = express.Router();
const config = require('../config/default');
const topics = config.faqTopics.data;

/* GET home page. */
router.get('/faq', function(req, res, next) {
    var topicDetails = lodash.filter(topics, {'enabled': true} );
    var twitchTopics = [];
    var serverTopics = [];
    var legacyTopics = [];
    var faqTopics = [];

    for(x in topicDetails){
        // console.log(x);
        if(topicDetails[x].category === "twitch"){
            twitchTopics.push(topicDetails[x])
        }else if(topicDetails[x].category === "legacy"){
            legacyTopics.push(topicDetails[x])
        }else if(topicDetails[x].category === "server"){
            serverTopics.push(topicDetails[x])
        }else if(topicDetails[x].category === "faq"){
            faqTopics.push(topicDetails[x])
        }
    }
    res.render('index', {
        siteInfo: {
            title: config.web.title,
            siteName: config.web.siteName
        },
        topics:{
            twitch: twitchTopics,
            server: serverTopics,
            legacy: legacyTopics,
            faq: faqTopics
        },
        pageName: "Home",
        home: true
    });
});

router.get('/faq/sitejson.json', function(req, res, next) {
    var siteJSON = JSON.stringify( config.faqTopics );
    res.header("Content-Type", "application/json");
    res.render('json', {
        json: siteJSON
    });
});

router.get('/faq/:topic', function(req, res, next) {
    var topicParam = req.params.topic;
    var topicDetails = lodash.find(topics, {'uri': topicParam} );
    if((typeof topicDetails !== 'undefined') && topicDetails.enabled){
        res.render('faq', {
            siteInfo: {
                title: config.web.title,
                siteName: config.web.siteName

            },
            topicInfo:{
                title: topicDetails.name,
                description: topicDetails.title,
                category: topicDetails.category
            },
            home: false,
            getTopic: function() {
                return "topics/" + topicParam;
            }
        });
    }else{
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
