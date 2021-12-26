<script lang="ts">
	export let src: string;
	export let name: string;

	let className = '';
	export { className as class };
</script>

<div class="w-12 h-12 {className}">
	<img {src} alt={name} class="border-2 border-white w-full h-full rounded-full" />
</div>
