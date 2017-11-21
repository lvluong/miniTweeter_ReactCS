import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBoxvl from './TweetBoxvl.jsx';
import './App.css';
import Tweet from './Tweet.jsx';

class App extends Component {


  constructor(props){
    super(props)
    this.state ={
      tweets: [
        {
         text: "Hello",
         liked: true
        },
        {
          text: "World",
          liked: false
        }
      ]
    }
  }

  handleTweet(tweetText){
    let tweetObj = {
      text: tweetText,
      liked: false
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }
  
  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text == tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        } 
      }
      return t;
    });
    this.setState({tweets})
  }

  handleDelete(tweet){
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Whack-a-Trump-MiniTweeter</h1>
        </header>
        <div>
          <TweetBoxvl prompt="What's your best Trump insult" onTweet={this.handleTweet.bind(this)}/>
        </div>
        {
           this.state.tweets.map ( (tweet) => (
           <Tweet 
            tweet={tweet}
            handleLike={this.handleLike.bind(this)}
            handleDelete={this.handleDelete.bind(this)}
            />))
        }
    </div>
    );
  }
}
export default App;