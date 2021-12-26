<script lang="ts">
	import Reveal from '$lib/core/components/Reveal.svelte';
	import ProfilePhoto from '$lib/core/components/ProfilePhoto.svelte';
	import Github from '$lib/core/icons/Github.svelte';
	import Linkedin from '$lib/core/icons/Linkedin.svelte';
	import Website from '$lib/core/icons/Website.svelte';
	import { members } from '$lib/members/data/members';
</script>

<div class="flex flex-col gap-4">
	{#each members as member, index}
		<div class="flex gap-4">
			<ProfilePhoto {...member} class="w-24 h-24" />
			<Reveal
				transition="fly"
				flyY={40}
				duration={600}
				delay={index * 100}
				class="flex flex-col justify-center gap-2 content"
			>
				<p class="text-xl font-bold">
					{member.name}
				</p>
				<ul class="flex gap-2 text-pink-200">
					<li><a href={member.github} class="w-6 h-6"><Github class="w-6 h-6" /></a></li>
					<li><a href={member.linkedin} class="w-6 h-6"><Linkedin class="w-6 h-6" /></a></li>
					{#if member.website}
						<li><a href={member.website} class="w-6 h-6"><Website class="w-6 h-6" /></a></li>
					{/if}
				</ul>
			</Reveal>
		</div>
	{/each}
</div>

<style lang="postcss">
</style>
