<script>
	import TechtrisModelCanvas from './TechtrisModelCanvas.svelte';
</script>

<section class="relative bg-gradient-to-b from-pink/50 aspect-video">
	<header class="flex flex-col justify-end h-full max-w-screen-md gap-4 p-8 mx-auto">
		<h1 class="text-6xl font-bold">
			<span>Tech</span><span class="text-salmon-300">tris</span>
		</h1>
		<p class="text-2xl font-bold text-pink-200">T-spinning since 2019</p>
	</header>
	<div class="absolute inset-0 left-1/2 md:left-1/3 z-[-1]">
		<TechtrisModelCanvas />
	</div>
</section>
