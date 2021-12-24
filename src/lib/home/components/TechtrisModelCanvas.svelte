<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { loadGLTF } from '$lib/core/utils/model-loader';
	import { onMount } from 'svelte';

	onMount(async () => {
		const gltf = await loadGLTF('/models/techtris.glb');
		console.log(gltf);
	});
</script>

<SC.Canvas alpha antialias>
	<SC.PerspectiveCamera position={[9, 9, 9]} fov={50} zoom={1.5} />

	<SC.AmbientLight />

	{#await loadGLTF('/models/techtris.glb') then gltf}
		<SC.Primitive object={gltf.scene} />
	{/await}
	<SC.OrbitControls enableZoom={false} />
</SC.Canvas>
