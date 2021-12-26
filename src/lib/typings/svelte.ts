export type Action<T> = (
	node: HTMLElement,
	params?: T
) => {
	update?: (newParams: T) => void;
	destroy?: () => void;
};
