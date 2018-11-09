import React from 'react';
import {connect } from 'react-redux';

import Countdown from './Countdown';
import { setMode, editShowCountdownTime, setCountdown, stopCountdown, startCountdown, resetCountdown } from '../../actions';
import { modes } from '../../shared/modes';

import '../styles/Countdown.scss';

const mapStateToProps = (state, prevProps) => ({
	path: state.navigation.path,
  mode: state.mode,
  showCountdown: state.show.countdown,
  countdown: state.countdown,
});

const mapDispatchToProps = {
  setMode,
  editShowCountdownTime,
  setCountdown,
  startCountdown,
  stopCountdown,
  resetCountdown,
};

class CountdownContainer extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

  handleClick() {
    if (this.props.mode.preview === modes.COUNTDOWN) this.props.setMode(modes.COUNTDOWN, true);
    else this.props.setMode(modes.COUNTDOWN, false);
  };

	render() {
		if (this.props.path !== 'countdown') return null;

		return (
			<div className="countdown-container"
				onClick={() => this.handleClick()}
			>
				<h1>Countdown</h1>
				<div className={`countdown ${this.props.mode.preview === modes.COUNTDOWN ? '-highlighted' : ''} ${this.props.mode.live === modes.COUNTDOWN ? '-highlighted-live' : ''}`}>
					<img src={this.props.showCountdown.background} />
					<button onClick={() => this.props.countdown.on ? this.props.stopCountdown() : this.props.startCountdown()}>{this.props.countdown.on ? 'Stop' : 'Start'}</button>
					<button onClick={() => this.props.resetCountdown()}>Reset</button>
					<p>{this.props.countdown.time}</p>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownContainer);

