import React from 'react';
import { connect } from 'react-redux';

import { modes } from '../../shared/modes';
import { setMode, setShowTweets } from '../../actions';

const mapStateToProps = (state) => ({
	mode: state.mode,
	path: state.navigation.path,
  tweets: state.show.tweets,
});

const mapDispatchToProps = {
	setShowTweets,
	setMode,
}

class TwitterFeed extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch('/tweets')
		  .then(response => {
		    return response.json();
		  })
		  .then(tweets => {
		    this.props.setShowTweets(tweets);
		  });
	}

	render() {
		if (this.props.path !== 'twitter') return null;

		return (
			<div>
			<button onClick={() => this.props.setMode(modes.TWITTER, false)}>Go Preview</button>
			<button onClick={() => this.props.setMode(modes.TWITTER, true)}>Go Live!</button>
			<ul>
				{ this.props.tweets.map((tweet, index) => (
					<li key={index}><button onClick={() => this.props.setShowTweets(
						this.props.tweets.filter((t, i) => (i !== index))
					)}>X</button>{tweet.text}</li>
				))}
			</ul>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);