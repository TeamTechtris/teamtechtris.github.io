<script lang="ts" context="module">
	export type TransitionType = 'fade' | 'fly';
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let percent = 0;
	export let repeat = false;

	let className = '';
	export { className as class };

	let node: HTMLElement;
	let jsEnabled = false;
	let observer: IntersectionObserver;
	let unobserve = () => {};
	let visible = false;

	const observerCallback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio * 100 >= percent) {
				visible = true;
				if (!repeat) {
					unobserve();
				}
			} else {
				visible = false;
			}
		});
	};

	onMount(() => {
		jsEnabled = true;
		const intersectionObserverSupported =
			'IntersectionObserver' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry?.prototype;

		if (!intersectionObserverSupported) {
			return unobserve;
		}

		const options = {
			threshold: percent / 100,
		};
		observer = new IntersectionObserver(observerCallback, options);
		observer.observe(node);
		unobserve = () => {
			observer.unobserve(node);
		};
		return unobserve;
	});
</script>

<div bind:this={node} class={className}>
	<slot reveal={jsEnabled && visible} manualReveal={!jsEnabled} />
</div>
