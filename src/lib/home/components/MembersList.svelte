<script lang="ts">
	import ProfilePhoto from '$lib/core/components/ProfilePhoto.svelte';
	import { members } from '$lib/core/data/members';

	export let duration = 500;
</script>

<div class="photo-container" style="--duration: {duration}ms;">
	{#each members as member, index}
		<div style="--index: {index};">
			<div class="photo">
				<ProfilePhoto {...member} />
			</div>
			<div class="name">
				<p class="flex items-center h-full">
					{member.name}
				</p>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.photo-container {
		@apply relative;
		height: 3rem;
		transition: height var(--duration) ease-in-out;
	}

	:global(.group:hover) .photo-container {
		height: calc(19rem);
	}

	.photo {
		@apply absolute;
		top: 0;
		left: calc(var(--index) * 4rem);
		transition: top var(--duration) ease-in-out, left var(--duration) ease-in-out;
	}

	:global(.group:hover) .photo {
		top: calc(var(--index) * 4rem);
		left: 0;
	}

	.name {
		@apply absolute;
		left: 4rem;
		height: 3rem;
		top: 0;
		opacity: 0;
		transition: opacity var(--duration) ease-in-out, top var(--duration) ease-in-out;
	}

	:global(.group:hover) .name {
		opacity: 1;
		top: calc(var(--index) * 4rem);
	}
</style>
