console.log('Starting Mindfulness Bot.');

let Twit = require('twit');

let T = new Twit({
    consumer_key: 'hVDmQKef37u2ai7gO2vutqoyr',
    consumer_secret: 'NMF6EA23ruEqWFkwu17X6n98mkXiQ3wU31d8A0Y4hmohzCWl6x',
    access_token: '1254855761580220416-l0AsltiJRYdhEkbhUlWENn7LJQ0LLA',
    access_token_secret: 'whnpFrt7nUn8KIzWYCF9AhJhHkbBkCImVPXGz951JbEOR'
});

//put in a separate file?
let quotes1 = [];
quotes1[0] = "Are you at ease, at this moment?";
quotes1[1] = "Ask yourself: what's going on inside me, right now?";
quotes1[2] = "Pause for a few moments; take 5 deep breaths, be with each one.";
quotes1[3] = "How do you feel right now? Observe your emotions without judging them.";
quotes1[4] = '"Almost everything will work again if you unplug if you unplug it for a few minutes, including you." - Anne Lamott';
quotes1[5] = "As within, so without";
quotes1[6] = "The clear sky is always there if you seek it.";
quotes1[7] = "Never underestimate the clarity that comes with a calm mind.";
quotes1[8] = "See if you can catch yourself complaining. Let go of resistance, then act once you have accepted the situation.";
quotes1[9] = "Become aware of how fear and worry tend to distort reality and make things worse than they seem.";
quotes1[10] = "Whatever you plan to do in the next five minutes, do it fully. Put away all distractions, and live every moment of it with all of your presence.";





function post_tweet() { 
    let r = Math.floor(Math.random()*10);

    let tweet_to_post = {
        status: quotes1[r]
    }

    function check_post(err, data, response) {
        if(!err) {
            console.log("Mindfulness bot successfully tweeted.");
        } else {
            console.log("Mindfulness bot failed to tweet...?");
        }
        //console.log(data);
    }

    T.post('statuses/update', tweet_to_post, check_post);
}

post_tweet();
setInterval(post_tweet, 1000*60*120); //1000*60*120 every two hours




//RETRIEVING TWEETS

// let params = {
//     q: 'test',
//     count: 3
// }

// function logData(err, data, response) { 
//     let tweets = data.statuses;
//     //let i;

//     for(let i = 0; i < tweets.length; i++) {
//         console.log('Tweet ' + (i+1) + ":");
//         console.log(tweets[i].text + '\n');
//     }
// }

// T.get('search/tweets', params, logData);
