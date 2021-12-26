<script lang="ts">
	import ProfilePhoto from '$lib/core/components/ProfilePhoto.svelte';
	import Github from '$lib/core/icons/Github.svelte';
	import Linkedin from '$lib/core/icons/Linkedin.svelte';
	import Website from '$lib/core/icons/Website.svelte';

	export let name: string;
	export let src: string;
	export let github: string;
	export let linkedin: string;
	export let website: string | undefined = undefined;
</script>

<div class="flex items-center gap-4">
	<ProfilePhoto {src} {name} class="w-32 h-32" />
	<div>
		<p class="text-2xl font-bold">
			{name}
		</p>
		<ul class="flex gap-4">
			<li><Github class="w-8 h-8" /></li>
			<li><Linkedin class="w-8 h-8" /></li>
			<li><Website class="w-8 h-8" /></li>
		</ul>
	</div>
</div>
