<script lang="ts">
	import type { SkillID } from '$lib/projects/data/skills';
	import SkillChip from './SkillChip.svelte';

	export let skills: SkillID[];

	let className = '';
	export { className as class };
</script>

<ul class="flex gap-2 flex-wrap p-2 bg-slate-700 w-fit rounded-xl {className}">
	{#each skills as skill}
		<SkillChip {skill} />
	{/each}
</ul>
