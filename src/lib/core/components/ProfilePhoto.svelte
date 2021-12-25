<script lang="ts">
	export let src: string;
	export let name: string;
</script>

<div class="w-12 h-12 overflow-hidden border-4 border-white rounded-full">
	<img {src} alt={name} class="w-full h-full" />
</div>
