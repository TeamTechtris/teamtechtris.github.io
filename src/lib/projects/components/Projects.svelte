<script lang="ts" context="module">
	const getPrevIndex = (currIndex: number, length: number): number => {
		return (currIndex + length - 1) % length;
	};
	const getNextIndex = (currIndex: number, length: number): number => {
		return (currIndex + 1) % length;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import ChevronLeft from '$lib/core/icons/ChevronLeft.svelte';
	import ChevronRight from '$lib/core/icons/ChevronRight.svelte';
	import ComoClub from './ComoClub.svelte';
	import HelloWorld from './HelloWorld.svelte';
	import KopiTime from './KopiTime.svelte';
	import WokNRoll from './WokNRoll.svelte';

	let duration = 0;

	let currentIndex = 0;
	let jsEnabled = false;
	onMount(() => {
		jsEnabled = true;
		setTimeout(() => {
			duration = 500;
		}, 20);
	});

	const pages = [HelloWorld, KopiTime, ComoClub, WokNRoll];

	const handlePrev = () => {
		currentIndex = getPrevIndex(currentIndex, pages.length);
	};
	const handleNext = () => {
		currentIndex = getNextIndex(currentIndex, pages.length);
	};
</script>

<section class="overflow-hidden bg-gradient-to-b from-purple-400 to-pink/50">
	<div class="flex flex-col max-w-screen-md gap-4 p-8 mx-auto">
		<h2 class="text-4xl font-bold tracking-wide text-gradient">Our Projects</h2>
		{#if jsEnabled}
			<div class="flex gap-2 px-2 mb-2">
				{#each pages as _, index}
					<div class="w-2 h-2 rounded-full {index === currentIndex ? 'bg-white' : 'bg-white/50'}" />
				{/each}
			</div>
		{/if}
		<div class:zStack={jsEnabled} class="relative" style="--duration: {duration}ms">
			{#each pages as page, index (index)}
				<div
					class="page"
					class:hideLeft={jsEnabled &&
						index !== currentIndex &&
						getNextIndex(index, pages.length) === currentIndex}
					class:hideRight={jsEnabled &&
						index !== currentIndex &&
						getNextIndex(index, pages.length) !== currentIndex}
				>
					<svelte:component this={page} />
				</div>
			{/each}
			{#if jsEnabled}
				<button
					on:click={handlePrev}
					class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 button pageButton"
				>
					<ChevronLeft class="w-6 h-6" />
				</button>
				<button
					on:click={handleNext}
					class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 button pageButton"
				>
					<ChevronRight class="w-6 h-6" />
				</button>
			{/if}
		</div>
	</div>
</section>

<style lang="postcss">
	.zStack {
		@apply grid grid-cols-1;
	}

	.zStack > :global(*) {
		grid-column: 1 / 1;
		grid-row: 1 / 1;
	}

	.page {
		transition: opacity var(--duration) ease-out, transform calc(var(--duration) * 1.25) ease-out;
	}

	.hideLeft {
		@apply opacity-0 pointer-events-none;
		transform: translateX(-600px) rotate(-3deg);
	}

	.hideRight {
		@apply opacity-0 pointer-events-none;
		transform: translateX(600px) rotate(3deg);
	}

	.pageButton {
		@apply w-12 h-12 flex justify-center items-center;
	}
</style>
