const express = require('express');
const lodash = require('lodash');
const router = express.Router();
const config = require('../config/default');
const sitePages = require('../config/sitePages');
const topics = sitePages.faqTopics.data;

/* GET home page. */
router.get('/', function(req, res, next) {
    let topicDetails = lodash.filter(topics, {'enabled': true} );
    let twitchTopics = [];
    let serverTopics = [];
    let legacyTopics = [];
    let faqTopics = [];

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
}).get('/sitejson.json', function(req, res, next) {
    let siteJSON = JSON.stringify( sitePages.faqTopics );
    res.header("Content-Type", "application/json");
    res.render('json', {
        json: siteJSON
    });
}).get('/:topic', function(req, res, next) {
    let topicParam = req.params.topic;
    let topicDetails = lodash.find(topics, {'uri': topicParam} );
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
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
