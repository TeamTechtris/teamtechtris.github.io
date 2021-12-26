<script lang="ts">
	import Reveal from '$lib/core/components/Reveal.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<ProjectItem projectId="como-club">
	<p>
		We designed a highly available and maintainable backend architecure for our SMU-X sponsor
		&mdash; COMO Group.
	</p>
	<p>
		Most notably, our architecture <strong>fails gracefully</strong> when third-party external services
		are unavailable.
	</p>
	<p>
		We continuously check the health of external services. When an external service fails a
		healthcheck, we queue all client requests and notify users of the temporary disruption. Once the
		external service is healthy, we automatically trigger a recovery phase and continue with regular
		execution.
	</p>
	<div class="relative mt-4 aspect-square">
		<Reveal
			percent={50}
			transition="fly"
			flyY={50}
			duration={600}
			delay={250}
			class="absolute top-[10%] left-[20%] right-[40%]"
		>
			<img src="/projects/como-club/home.png" alt="como club home page" />
		</Reveal>

		<Reveal
			percent={50}
			transition="fly"
			flyY={50}
			duration={600}
			delay={50}
			class="absolute top-0 left-[40%] right-[20%]"
		>
			<img src="/projects/como-club/experiences.png" alt="como club experiences page" />
		</Reveal>
	</div>
</ProjectItem>
