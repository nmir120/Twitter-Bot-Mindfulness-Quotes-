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

function populate_quote_array() {
    quotes1.push("Are you at ease, at this moment?");
    quotes1.push("Ask yourself: what's going on inside me, right now?");
    quotes1.push("Pause for a few moments; take 5 deep breaths, be with each inhale and exhale.");
    quotes1.push("How do you feel right now? Observe your emotions without judging them.");
    quotes1.push('"Almost everything will work again if you unplug it for a few minutes, including you." - Anne Lamott');
    quotes1.push("As within, so without.");
    quotes1.push("No matter the weather, the clear sky is always there if you seek it.");
    quotes1.push("Never underestimate the clarity that comes with a calm mind.");
    quotes1.push("See if you can catch yourself complaining in your head. Let go of resistance, then act once you have accepted the situation.");
    quotes1.push("Become aware of how fear and worry tend to distort reality and make things worse than they seem.");
    quotes1.push("Whatever you plan to do in the next five minutes, do it fully. Put away all distractions, and live every moment of it with all of your presence.");
    quotes1.push("Use the awareness of your body as an anchor to stay present in the moment.");
    quotes1.push('“The feeling that any task is a nuisance will soon disappear if it is done in mindfulness.” – Thích Nhất Hạnh');
    quotes1.push('“Enlightenment is nothing more than the complete absence of resistance to what is. End of story.” ― Adyashanti');
    quotes1.push('“When we believe what we think, when we take our thinking to be reality, we will suffer.” ― Adyashanti');
    quotes1.push('"Realize deeply that the present moment is all you ever have." - Eckhart Tolle');
    quotes1.push('"What a liberation to realize that the “voice in my head” is not who I am. Who am I then? The one who sees that." - Eckhart Tolle');
    quotes1.push('“You are the sky. Everything else is just the weather.” – Pema Chödrön');
    quotes1.push("Emotion is simply your body's reaction to your mind.");
    quotes1.push('"The present moment is filled with joy and happiness. If you are attentive, you will see it." - Thích Nhất Hạnh');
    quotes1.push("The harder you struggle to get rid of the pain, the greater the pain.");
    quotes1.push('“Mindless fear is greater than mindful fear.” ― Idowu Koyenikan');
    quotes1.push('"The only way to make sense out of change is to plunge into it, move with it, and join the dance." - Alan Watts');
    quotes1.push('"This is the real secret of life — to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play." - Alan Watts');
    quotes1.push('“Half the time you think your thinking you’re actually listening” ― Terence McKenna');
}


function post_tweet() { 

    if(quotes1.length < 1) { //if all quotes from bank tweeted, allow repetition of tweets
        populate_quote_array();
    }

    let r = Math.floor(Math.random()*(quotes1.length));
    
    let tweet_to_post = {
        status: quotes1[r] + ' #mindfulness #bot'
    }
    // tester
    // console.log(quotes1[r]);

    T.post('statuses/update', tweet_to_post, function(err, data, response) {
        if(!err) {
            console.log("Mindfulness bot successfully tweeted.");
        } else {
            console.log("Mindfulness bot failed to tweet.");
        }
        //console.log(data);
    });

    quotes1.splice(r, 1); //remove quote so it's not repeated
}

populate_quote_array();
post_tweet();
setInterval(post_tweet, 1000*60*60); //tweet every 60 minutes
//1000*60*120 every two hours

// tester... comment out t.post as well
// populate_quote_array();
// console.log("\nfirst go...\n");
// let numquotes = quotes1.length;
// for(let i = 0; i < numquotes; i++) {
//     post_tweet();
// }
// console.log("\nsecond go...\n");
// for(let i = 0; i < numquotes; i++) {
//     post_tweet();
// }





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
