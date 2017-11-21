import React, { Component } from 'react';

class Tweet extends Component {
    render(){
        let tweet = this.props.tweet;
        return (
            <div>
                {tweet.text}
                <br/>
                <a href='#' onClick={() => this.props.handleLike(tweet)}>
                {tweet.liked ? "Like" : "Unlike"} Post 
                </a>
            </div>
        )
    }
}

export default Tweet;