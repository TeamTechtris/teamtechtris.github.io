<script lang="ts">
	import ProfilePhoto from '$lib/core/components/ProfilePhoto.svelte';
	import { members } from '$lib/core/data/members';

	export let duration = 500;
</script>

<div class="members" style="--duration: {duration}ms;">
	{#each members as member, index}
		<div style="--index: {index};">
			<div class="photo">
				<a href={member[member.preferred]} target="_blank" class="w-16 h-16">
					<ProfilePhoto {...member} />
				</a>
			</div>
			<div class="name">
				<a href={member[member.preferred]} target="_blank" class="flex items-center h-full">
					{member.name}
				</a>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.members {
		@apply relative;
		height: 3rem;
		transition: height var(--duration) ease-in-out;
	}

	.photo {
		@apply absolute;
		top: 0;
		left: calc(var(--index) * 4rem);
		transition: top var(--duration) ease-in-out, left var(--duration) ease-in-out;
	}

	.name {
		@apply absolute;
		left: 4rem;
		height: 3rem;
		top: 0;
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--duration) ease-in-out, top var(--duration) ease-in-out;
	}

	/* lg: */
	@media (min-width: 1024px) {
		:global(.group:hover) .members {
			height: calc(19rem);
		}

		:global(.group:hover) .photo {
			top: calc(var(--index) * 4rem);
			left: 0;
		}

		:global(.group:hover) .name {
			opacity: 1;
			top: calc(var(--index) * 4rem);
			pointer-events: all;
		}
	}
</style>
