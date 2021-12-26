<script lang="ts">
	import { SkillID, skills } from '$lib/projects/data/skills';

	export let skill: SkillID;
	$: skillItem = skills[skill];
</script>

{#if skillItem}
	<li class="relative group">
		<img src={skillItem.src} alt={skillItem.name} class="w-6 h-6" />
		<div
			class="absolute p-3 mb-4 text-sm opacity-0 pointer-events-none bg-white/10 backdrop-blur-xl whitespace-nowrap rounded-xl bottom-full group-hover:opacity-100"
		>
			{skillItem.name}
		</div>
	</li>
{/if}
