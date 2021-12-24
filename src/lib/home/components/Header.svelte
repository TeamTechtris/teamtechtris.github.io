<script>
	import TechtrisModelCanvas from './TechtrisModelCanvas.svelte';
</script>

<section class="relative bg-gradient-to-b from-pink/50">
	<header class="max-w-screen-md p-8 mx-auto">
		<h1 class="mt-32 text-6xl font-bold drop-shadow-lg text-gradient">Techtris</h1>
		<p>T-spinning since 2019</p>
	</header>
	<div class="absolute inset-0 left-1/2">
		<TechtrisModelCanvas />
	</div>
</section>
