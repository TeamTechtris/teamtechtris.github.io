<script lang="ts">
	import { projects } from '$lib/projects/data/projects';
	import { projectSkills } from '$lib/projects/data/project-skills';
	import type { ProjectID } from '$lib/projects/data/projects';
	import SkillList from './SkillList.svelte';

	export let projectId: ProjectID;
	$: ({ name } = projects[projectId]);
	$: skills = projectSkills.filter(([p]) => p === projectId).map(([, s]) => s);

	let className = '';
	export { className as class };
</script>

<div class="space-y-4 auto-html {className}">
	<h2 class="text-3xl font-bold">
		{name}
	</h2>
	<SkillList {skills} />
	<slot />
</div>
