<script lang="ts">
	export let src: string;
	export let name: string;
</script>

<div class="relative w-12 h-12">
	<img {src} alt={name} class=" border-2 border-white w-full h-full rounded-full" />
</div>
