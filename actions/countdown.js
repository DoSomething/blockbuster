import { START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN } from './';

export function startCountdown() {
	return { type: START_COUNTDOWN };
}

export function stopCountdown() {
	return { type: STOP_COUNTDOWN };
}

export function resetCountdown() {
	return { type: RESET_COUNTDOWN };
}
