<script lang="ts">
	import { projects } from '$lib/projects/data/projects';
	import { projectSkills } from '$lib/projects/data/skills';
	import type { ProjectID } from '$lib/projects/data/projects';
	import SkillList from './SkillList.svelte';

	export let projectId: ProjectID;
	$: ({ description, href, name } = projects[projectId]);
	$: skills = projectSkills.filter(([p]) => p === projectId).map(([, s]) => s);
</script>

<a {href} target="_blank" class="gap-4 group">
	<div class="space-y-2 transition-colors group-hover:text-gold-400">
		<h2 class="text-3xl font-bold">
			{name}
		</h2>
		<p class="leading-6">
			{@html description}
		</p>
	</div>
</a>
<SkillList {skills} />
