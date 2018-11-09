import { START_COUNTDOWN, TICK_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN } from '../actions';

let interval;

export const countdown = ({ dispatch, getState }) => next => action => {
	switch (action.type) {
		case START_COUNTDOWN:
			interval = setInterval(() => {
				const time = getState().countdown.time;
				// const on = getState().countdown.on;
				if (time && time > 0) {
					dispatch({ type: TICK_COUNTDOWN });
				} else {
					clearInterval(interval);
					dispatch({ type: STOP_COUNTDOWN });
				}
			}, 1000)
			return next({...action});

		case RESET_COUNTDOWN:
			clearInterval(interval);
			const seconds = getState().show.countdown.seconds;
			return next({...action, time: seconds});

		case STOP_COUNTDOWN:
			clearInterval(interval);
			return next(action);

		default:
			return next(action);
	}
};