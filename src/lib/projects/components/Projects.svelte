<script lang="ts">
	import ComoClub from './ComoClub.svelte';
	import HelloWorld from './HelloWorld.svelte';
	import KopiTime from './KopiTime.svelte';
	import WokNRoll from './WokNRoll.svelte';
</script>

<section class="overflow-hidden">
	<div class="flex flex-col max-w-screen-md gap-4 p-8 mx-auto">
		<h2 class="text-4xl font-bold tracking-wide text-gradient">Our Projects</h2>
		<HelloWorld />
		<KopiTime />
		<ComoClub />
		<WokNRoll />
	</div>
</section>
