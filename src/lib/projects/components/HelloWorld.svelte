<script lang="ts">
	import Reveal from '$lib/core/components/Reveal.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<ProjectItem projectId="helloworld" class="mb-8 card p-8">
	<p>
		An AR application to re-live and reminiscence your travel adventures in the face of border
		restrictions.
	</p>
	<p class="font-mono text-xl font-bold">
		CODE_EXP 2021 ·
		<span class="text-yellow">1st Place</span>
	</p>
	<p>
		<strong>HelloWorld</strong> was developed in a week for the CODE_EXP 2021 Hackathon.
	</p>
	<p>
		<a
			href="https://news.smu.edu.sg/news/2021/07/02/smus-computing-and-information-systems-team-emerged-champions-dsta-hackathon"
			target="_blank"
		>
			Read more about us</a
		>.
	</p>
	<div class="relative z-0 aspect-square">
		<Reveal
			percent={80}
			transition="fly"
			flyX={30}
			flyY={50}
			duration={600}
			delay={50}
			class="absolute top-[5%] left-0 right-[45%]"
		>
			<img src="/projects/helloworld/map-flat.png" alt="helloworld discover screen" />
		</Reveal>
		<Reveal
			percent={80}
			transition="fly"
			flyX={30}
			flyY={50}
			duration={600}
			delay={200}
			class="absolute top-[15%] left-[47%] right-0"
		>
			<img src="/projects/helloworld/ar-portrait-flat.png" alt="helloworld ar portrait" />
		</Reveal>
		<Reveal
			percent={80}
			transition="fly"
			flyX={-50}
			flyY={30}
			duration={600}
			delay={350}
			class="absolute top-[50%] left-[10%] right-[25%]"
		>
			<img src="/projects/helloworld/ar-landscape-flat-rotated.png" alt="helloworld ar portrait" />
		</Reveal>
	</div>
</ProjectItem>
