import React from 'react';
import { connect } from 'react-redux';

import { setMode, editShowCountdownTime, setCountdown } from '../../actions';

const mapStateToProps = (state, prevProps) => ({
  showCountdown: state.show.countdown,
  countdown: state.countdown,
});

const mapDispatchToProps = {
  editShowCountdownTime,
  setCountdown,
};

class Countdown extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="countdown__item" style={{backgroundImage: `url("${this.props.showCountdown.background}")`}}>
				<h1 className="screen__text" style={{fontSize: this.props.showCountdown.fontSize, color: this.props.showCountdown.fontColor, fontFamily: this.props.showCountdown.fontFamily}}>
					{ this.props.countdown.time }
				</h1>
			</div>	
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);