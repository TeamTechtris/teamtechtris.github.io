<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { loadOBJ } from '$lib/core/utils/model-loader';

	let spin = 0;
	SC.onFrame(() => {
		spin += 0.01;
	});

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<SC.Canvas alpha antialias>
	<SC.PerspectiveCamera position={[9, 6, -9]} fov={50} zoom={8} />

	{#await loadOBJ('/models/techtris.obj') then meshes}
		{#each meshes as mesh}
			<SC.Mesh
				rotation={[scrollY / 100, spin, 0]}
				geometry={mesh.geometry}
				material={new THREE.MeshStandardMaterial({ color: 0xdf828c })}
			/>
		{/each}
	{/await}

	<SC.HemisphereLight intensity={0.4} />
	<!-- key -->
	<SC.DirectionalLight position={[4, 0, 0]} intensity={0.8} />
	<!-- fill -->
	<SC.DirectionalLight position={[-4, -1, -2]} intensity={0.8} />
	<!-- highlight -->
	<SC.DirectionalLight position={[4, 4, 0]} intensity={0.8} color={0xedb484} />
	<SC.DirectionalLight position={[0, 0, 4]} intensity={0.8} color={0xa992cf} />
	<SC.DirectionalLight position={[-1, 1, -4]} intensity={0.8} color={0x0010ff} />

	<SC.OrbitControls enableZoom={false} />
</SC.Canvas>
