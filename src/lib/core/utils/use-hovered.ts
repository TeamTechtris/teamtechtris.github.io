import type { Action } from '$lib/typings/svelte';
import type { Writable } from 'svelte/store';

export const hovered: Action<Writable<boolean>> = (node, isHovered) => {
	const mouseenter = () => isHovered.set(true);
	const mouseleave = () => isHovered.set(false);
	node.addEventListener('mouseenter', mouseenter);
	node.addEventListener('mouseleave', mouseleave);
	return {
		destroy() {
			node.removeEventListener('mouseenter', mouseenter);
			node.removeEventListener('mouseleave', mouseleave);
		},
	};
};
