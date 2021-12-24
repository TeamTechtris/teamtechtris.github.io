<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { loadOBJ } from '$lib/core/utils/model-loader';
	import { onMount } from 'svelte';

	onMount(async () => {
		const meshes = await loadOBJ('/models/techtris.obj', '/models/techtris.mtl');
		console.log(meshes);
	});
</script>

<SC.Canvas alpha antialias>
	{#await loadOBJ('/models/techtris.obj', '/models/techtris.mtl') then meshes}
		{#each meshes as mesh}
			<SC.Mesh geometry={mesh.geometry} material={mesh.material} />
		{/each}
	{/await}
	<SC.PerspectiveCamera position={[-2, 1, -2]} fov={50} zoom={1.5} />
	<!-- key -->
	<SC.DirectionalLight intensity={1} position={[4.0, -0.2, 1.6]} />
	<!-- fill -->
	<SC.DirectionalLight intensity={1} position={[-0.2, -0.5, -5.0]} />
	<!-- back -->
	<SC.DirectionalLight intensity={1} position={[-4.2, -0.2, 4.3]} />
	<!-- blue highlight -->
	<SC.DirectionalLight intensity={5} position={[-2.7, -0.4, -6.6]} color={0x0010ff} />
	<!-- purple highlight -->
	<SC.DirectionalLight intensity={2} position={[9.5, 2.5, -9.5]} color={0x2e2fff} />
	<!-- pink highlight -->
	<SC.DirectionalLight intensity={4} position={[5.9, -0.4, -0.3]} color={0xe43dff} />
	<SC.OrbitControls enableZoom={false} />
</SC.Canvas>
