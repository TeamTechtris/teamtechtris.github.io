<script lang="ts">
	import Intersection from '$lib/core/components/Intersection.svelte';
	import ProfilePhoto from '$lib/core/components/ProfilePhoto.svelte';
	import Github from '$lib/core/icons/Github.svelte';
	import Linkedin from '$lib/core/icons/Linkedin.svelte';
	import Website from '$lib/core/icons/Website.svelte';
	import { members } from '$lib/members/data/members';

	export let duration = 500;
	export let delay = 200;
	export let numItems = members.length;
	export let photoSize = '4rem';
	export let gapSize = '1rem';
</script>

<Intersection percent={60} let:reveal let:manualReveal>
	<div
		class="members"
		class:reveal
		class:manualReveal
		style="--duration: {duration}ms; --delay: {delay}ms; --numItems: {numItems}; --photoSize: {photoSize}; --gapSize: {gapSize};"
	>
		{#each members as member, index}
			<div style="--index: {index};" class="contents">
				<div class="photo">
					<ProfilePhoto {...member} class="w-full h-full" />
				</div>
				<div class="content flex flex-col justify-center gap-2">
					<p class="font-bold text-xl">
						{member.name}
					</p>
					<ul class="flex gap-2 text-pink-200">
						<li><a href={member.github} class="w-6 h-6"><Github class="w-6 h-6" /></a></li>
						<li><a href={member.linkedin} class="w-6 h-6"><Linkedin class="w-6 h-6" /></a></li>
						{#if member.website}
							<li><a href={member.website} class="w-6 h-6"><Website class="w-6 h-6" /></a></li>
						{/if}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</Intersection>

<style lang="postcss">
	.members {
		@apply relative;
		height: calc(var(--numItems) * var(--photoSize) + (var(--numItems) - 1) * var(--gapSize));
	}

	.photo {
		@apply absolute;
		width: var(--photoSize);
		height: var(--photoSize);
		top: 0;
		left: calc(var(--index) * calc(var(--photoSize) + var(--gapSize)));
	}

	.manualReveal .photo {
		top: calc(var(--index) * calc(var(--photoSize) + var(--gapSize)));
		left: 0;
	}

	.reveal .photo {
		top: calc(var(--index) * calc(var(--photoSize) + var(--gapSize)));
		left: 0;
		transition: top var(--duration) ease-in-out var(--delay),
			left var(--duration) ease-in-out var(--delay);
	}

	.content {
		@apply absolute;
		left: calc(var(--photoSize) + var(--gapSize));
		height: var(--photoSize);
		pointer-events: none;
		top: 0;
		opacity: 0;
	}

	.manualReveal .content {
		pointer-events: all;
		opacity: 1;
		top: calc(var(--index) * calc(var(--photoSize) + var(--gapSize)));
	}

	.reveal .content {
		pointer-events: all;
		opacity: 1;
		top: calc(var(--index) * calc(var(--photoSize) + var(--gapSize)));
		transition: opacity var(--duration) ease-in-out var(--delay),
			top var(--duration) ease-in-out var(--delay);
	}
</style>
