<script lang="ts">
	import { projects } from '$lib/projects/data/projects';
	import { projectSkills } from '$lib/projects/data/skills';
	import type { ProjectID } from '$lib/projects/data/projects';
	import SkillList from './SkillList.svelte';

	export let projectId: ProjectID;
	$: ({ description, href, src, name } = projects[projectId]);
	$: skills = projectSkills.filter(([p]) => p === projectId).map(([, s]) => s);
</script>

<a {href} target="_blank" class="flex items-center gap-4 group">
	<div class="flex-shrink-0 w-24 h-24">
		<img {src} alt={name} class="w-full h-full" />
	</div>
	<div class="space-y-2 transition-colors group-hover:text-gold-400">
		<h2 class="text-xl font-bold">
			{name}
		</h2>
		<p class="leading-6">
			{@html description}
		</p>
	</div>
</a>
<SkillList {skills} />
