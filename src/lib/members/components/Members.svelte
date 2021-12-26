<script>
	import { members } from '$lib/core/data/members';
	import ContactCard from './ContactCard.svelte';
</script>

<section>
	<div class="flex flex-col max-w-screen-md gap-4 p-8 mx-auto">
		<h2 class="text-4xl font-bold tracking-wide">Members</h2>
		{#each members as member}
			<ContactCard {...member} />
		{/each}
	</div>
</section>
