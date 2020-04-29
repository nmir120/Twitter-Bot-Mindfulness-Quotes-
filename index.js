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
quotes1[2] = "Pause for a few moments; take 5 deep breaths, be with each breath.";
quotes1[3] = "How do you feel right now? Observe your emotions without judging them.";


function post_tweet() { 
    let r = Math.floor(Math.random()*3);

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

setInterval(post_tweet, 1000*30); //1000*60*120 every two hours




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
