<script lang="ts" context="module">
	export type TransitionType = 'fade' | 'fly';
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let percent = 0;
	export let repeat = false;
	export let transition: TransitionType = 'fade';
	export let duration = 500;
	export let delay = 0;
	export let flyX = 0;
	export let flyY = 100;

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

<div
	bind:this={node}
	class={className}
	class:hide={jsEnabled && !visible}
	class:fadeIn={transition === 'fade' && visible}
	class:cssFadeIn={transition === 'fade' && !jsEnabled}
	class:flyIn={transition === 'fly' && visible}
	class:cssFlyIn={transition === 'fly' && !jsEnabled}
	style="--duration:{duration}ms; --delay:{delay}ms; --flyX:{flyX}px; --flyY:{flyY}px"
>
	<slot />
</div>

<style lang="postcss">
	.hide {
		opacity: 0;
	}

	.fadeIn {
		opacity: 0;
		animation: var(--duration) ease-out var(--delay) normal forwards 1 fadeIn;
	}

	.cssFadeIn {
		opacity: 0;
		animation: var(--duration) ease-out 2.5s normal forwards 1 fadeIn;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.flyIn {
		opacity: 0;
		animation: var(--duration) ease-out var(--delay) normal forwards 1 flyIn;
	}

	.cssFlyIn {
		opacity: 0;
		animation: var(--duration) ease-out 2.5s normal forwards 1 flyIn;
	}

	@keyframes flyIn {
		0% {
			opacity: 0;
			transform: translate(var(--flyX), var(--flyY));
		}
		100% {
			opacity: 1;
			transform: translate(0, 0);
		}
	}
</style>
