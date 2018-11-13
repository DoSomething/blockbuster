const http = require('http');
const path = require('path');

const express = require('express');
const app = express();
const socketIo = require('socket.io');

const server = http.Server(app);
const io = socketIo(server);

const api = require('./api');

const Twitter = require('twitter');
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET, 
});

import { events } from '../shared/events';
import { initialState } from '../shared/initialState';
import { makeStore } from '../shared/store';
import { db } from '../middleware/db';

async function startup(state) {
  const store = makeStore('server', state, null, [db]);

  io.on('connection', (socket) => {
    // Send the new connection a copy of the current state
    const state = store.getState();
    socket.emit(events.INITIAL_STATE, state);

    // On newly dispatched actions...
    socket.on(events.DISPATCH, (action) => {
      // Run the action on the server to update the state
      action._peerEvent = true;
      store.dispatch(action);

      // Push the action to all clients except sender.
      socket.broadcast.emit(events.ACTION, action);
    });
  });
}

api.init().then(startup);

app.use('/public', express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'page.html'));
});

app.get('/tweets', (req, res) => {
  client.get('search/tweets', {q: `${process.env.TWITTER_SEARCH} -filter:retweets`, tweet_mode: 'extended'}, function(error, tweets, response) {
    if (!tweets || !tweets.statuses) return {};
    const processedTweets = tweets.statuses.map(tweet => {
      return {
        id: tweet.id_str,
        text: tweet.full_text,
      }
    })
    res.send(processedTweets);
  });
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`blockbuster listening on ${PORT}`);
});
