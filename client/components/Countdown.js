import React from 'react';
import { connect } from 'react-redux';

import { stopCountdown } from '../../actions';

const mapStateToProps = (state) => ({
  showCountdown: state.show.countdown,
  countdown: state.countdown,
});

class Countdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			time: props.showCountdown.time,
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			const time = this.state.time;
			const on = this.props.countdown.on;

			if (on && time > 0) {
				this.setState({ time: time - 1}) 
			}
		}, 1000);
	}

	componentDidUpdate() {
		if (this.props.countdown.reset && !this.props.countdown.on && this.state.time !== this.props.showCountdown.time) {
			this.setState({time: this.props.showCountdown.time});
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { fontSize, fontColor, fontFamily } = this.props.showCountdown;
		const style = { fontSize, fontFamily, color: fontColor };

		return (
			<h1 className="screen__text countdown__text" style={style}>
				{ this.state.time }
			</h1>
		);
	}
}

export default connect(mapStateToProps)(Countdown);