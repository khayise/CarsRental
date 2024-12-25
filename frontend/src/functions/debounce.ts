type TDebounce = <T extends (...args: any[]) => void>(
	callback: T,
	delay: number,
) => (...args: Parameters<T>) => void;

export const debounce: TDebounce = function (callback, delay) {
	let timerId: number | null = null;

	return function (...args) {
		if (timerId) {
			clearTimeout(timerId);
		}

		timerId = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};

export const trottle = function <T extends unknown[]>(
	callback: (...args: T) => void,
	delay: number = 1000,
) {
	let shouldWait: boolean = false;
	let waitingArgs: null | T;

	return (...args: T) => {
		if (shouldWait) {
			waitingArgs = args;
			return;
		}

		callback(...args);
		shouldWait = true;

		setTimeout(() => {
			shouldWait = false;
			if (waitingArgs !== null) {
				callback(...waitingArgs);
			}
		}, delay);
	};
};
