<script lang="ts">
	import Header from '$lib/home/components/Header.svelte';
	import Members from '$lib/members/components/Members.svelte';
	import Projects from '$lib/projects/components/Projects.svelte';
	import Footer from '$lib/footer/components/Footer.svelte';
</script>

<svelte:head>
	<title>Team Techtris</title>
</svelte:head>

<Header />
<Members />
<Projects />
<Footer />
