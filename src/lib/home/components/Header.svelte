<script>
	import ProfilePhoto from '$lib/core/components/ProfilePhoto.svelte';
	import { members } from '$lib/core/data/members';
	import TechtrisModelCanvas from './TechtrisModelCanvas.svelte';
</script>

<section class="relative bg-gradient-to-b from-pink/50 aspect-video">
	<header class="flex flex-col justify-end h-full max-w-screen-md gap-4 p-8 mx-auto">
		<h1 class="text-6xl font-bold tracking-wide">
			<span class="text-purple-light">Tech</span><span>tris</span>
		</h1>
		<div class="flex gap-4">
			{#each members as { name, src }}
				<ProfilePhoto {name} {src} />
			{/each}
		</div>
		<p class="text-2xl font-bold tracking-wide">T-spinning since 2019</p>
	</header>
	<div class="absolute inset-0 left-1/2 md:left-1/3 z-[-1]">
		<TechtrisModelCanvas />
	</div>
</section>
