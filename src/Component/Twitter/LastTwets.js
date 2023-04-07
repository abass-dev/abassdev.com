import Twitter from 'twitter';

export default function LastTweets() {
  
  const client = new Twitter({
    consumer_key: 'your_consumer_key',
    consumer_secret: 'your_consumer_secret',
    access_token_key: 'your_access_token',
    access_token_secret: 'your_access_token_secret'
  });
  
  function getTweets() {
  client.get('statuses/user_timeline', { count: 2 }, function(error, tweets) {
    if (error) throw error;
    console.log(tweets);
  });
}
 
}
