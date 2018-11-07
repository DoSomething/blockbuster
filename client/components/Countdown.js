import React from 'react';
import {connect } from 'react-redux';

const mapStateToProps = (state) => ({
	path: state.navigation.path,
});

const Countdown = ({ path }) => (
	path !== 'countdown' ? null : <h1>Countdown!</h1>
);

export default connect(mapStateToProps)(Countdown);