var keys = require("./keys.js");
// var request = require("request");
var command = process.argv[2];
var Twitter = require('twitter');
// var twitterCK = keys.twitterKeys.consumer_key;
// var twitterCS = keys.twitterKeys.consumer_secret;
// var twitterATK = keys.twitterKeys.access_token_key;
// var twitterATS = keys.twitterKeys.access_token_secret;
// var spotifyCK = keys.spotifyKeys.consumer_key;
// var spotifyCS = keys.spotifyKeys.consumer_secret;
// var omdbKey = keys.omdbKeys.consumer_key;



var client = new Twitter({
 consumer_key: keys.twitterKeys.consumer_key,
 consumer_secret: keys.twitterKeys.consumer_secret,
 access_token_key: keys.twitterKeys.access_token_key,
 access_token_secret: keys.twitterKeys.access_token_secret
});

var params = {screen_name: process.argv[3]};

// if (command === "my-tweets") {
//  client.get('statuses/user_timeline', params, function(error, tweets, response) {
//    if (!error) {
//      for (var i=0; i < 5; i++)
//      console.log(tweets[i].text);
//    }
//  });
// }
