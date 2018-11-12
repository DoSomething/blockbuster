import React from 'react';
import {connect } from 'react-redux';

import Countdown from './Countdown';
import { modes } from '../../shared/modes';
import { setMode, startCountdown, stopCountdown, resetCountdown } from '../../actions';

import '../styles/Countdown.scss';

const mapStateToProps = (state, prevProps) => ({
	path: state.navigation.path,
  mode: state.mode,
  showCountdown: state.show.countdown,
  countdown: state.countdown,
});

const mapDispatchToProps = {
  setMode,
  startCountdown,
  stopCountdown,
  resetCountdown,
};

const CountdownContainer = (props) => {
	const { path, mode, setMode, showCountdown, countdown,
		stopCountdown, startCountdown, resetCountdown } = props;
  const { COUNTDOWN } = modes;

  const handleClick = () => (
    mode.preview === COUNTDOWN ?
			setMode(COUNTDOWN, true)
			: setMode(COUNTDOWN, false)
  );

  const toggleCountdown = () => (
  	countdown.on ? stopCountdown() : startCountdown()
  );

	if (path !== 'countdown') return null;

	const countdownClass = `countdown
		${mode.preview === COUNTDOWN ? '-highlighted' : ''}
		${mode.live === COUNTDOWN ? '-highlighted-live' : ''}
	`;

	return (
		<div className="countdown-container">
			<h1>Countdown</h1>

			<div className={countdownClass} onClick={handleClick}>
				<img src={showCountdown.background} />
			</div>
			
			<Countdown />

			<div className="button-tray">
				<button onClick={toggleCountdown}>
					{countdown.on ? 'Stop' : 'Start'}
				</button>
				<button onClick={resetCountdown}>Reset</button>
			</div>

		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownContainer);

