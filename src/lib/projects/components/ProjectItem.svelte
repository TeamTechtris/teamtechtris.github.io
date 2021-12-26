<script lang="ts">
	import { projects } from '$lib/projects/data/projects';
	import { projectSkills } from '$lib/projects/data/skills';
	import type { ProjectID } from '$lib/projects/data/projects';
	import SkillList from './SkillList.svelte';

	export let projectId: ProjectID;
	$: ({ name } = projects[projectId]);
	$: skills = projectSkills.filter(([p]) => p === projectId).map(([, s]) => s);
</script>

<div class="space-y-4 auto-html">
	<h2 class="text-3xl font-bold">
		{name}
	</h2>
	<SkillList {skills} />
	<slot />
</div>
