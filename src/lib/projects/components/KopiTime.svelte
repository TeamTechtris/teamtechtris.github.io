<script lang="ts">
	import Reveal from '$lib/core/components/Reveal.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<ProjectItem projectId="kopi-time" class="mb-8 card p-8">
	<p>Kopi Time is a digital marketplace for coffee-related art and collectables.</p>
	<p>We implemented a reliable and robust microservice architecture to handle:</p>
	<ul class="ml-4 list-disc list-outside">
		<li>market trading functionality,</li>
		<li>listing timeouts and expirations, and</li>
		<li>user notifications.</li>
	</ul>
	<p>
		The full report on our architectural decisions can be viewed
		<a href="/projects/kopi-time/cs302-final-report.pdf" target="_blank">here</a>.
	</p>
	<div class="relative aspect-[16/5] mt-4">
		<Reveal
			percent={80}
			transition="fly"
			flyY={50}
			duration={600}
			delay={50}
			class="absolute top-[10%] left-0 right-[60%]"
		>
			<img src="/projects/kopi-time/home.png" alt="kopi-time home page" />
		</Reveal>

		<Reveal
			percent={80}
			transition="fly"
			flyY={50}
			duration={600}
			delay={150}
			class="absolute top-[10%] left-[60%] right-0"
		>
			<img src="/projects/kopi-time/listings.png" alt="kopi-time listings page" />
		</Reveal>

		<Reveal
			percent={80}
			transition="fly"
			flyY={50}
			duration={600}
			delay={250}
			class="absolute left-[25%] right-[25%]"
		>
			<img src="/projects/kopi-time/profile.png" alt="kopi-time profile page" />
		</Reveal>
	</div>
</ProjectItem>
