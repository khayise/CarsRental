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

export const throttle = function <T extends unknown[]>(
	callback: (...args: T) => void,
	delay: number = 1000,
) {
	let shouldWait: boolean = false;
	let waitingArgs: T = [] as unknown as T; // Изменили с null на пустой массив

	return (...args: T) => {
		if (shouldWait) {
			waitingArgs = args;
			return;
		}

		callback(...args);
		shouldWait = true;

		setTimeout(() => {
			shouldWait = false;
			if (waitingArgs.length > 0) {
				// Проверка на пустой массив
				callback(...waitingArgs);
				waitingArgs = [] as unknown as T; // Очистка waitingArgs после вызова
			}
		}, delay);
	};
};
