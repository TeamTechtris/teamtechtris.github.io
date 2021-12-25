<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { colors } from '$lib/core/theme';
	import { loadOBJ } from '$lib/core/utils/model-loader';

	let spin = 0;
	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<SC.Canvas alpha antialias>
	<SC.PerspectiveCamera position={[9, 6, -9]} fov={50} zoom={8} />

	{#await loadOBJ('/models/techtris.obj') then meshes}
		{#each meshes as mesh}
			<SC.Mesh
				rotation={[0, spin, 0]}
				geometry={mesh.geometry}
				material={new THREE.MeshStandardMaterial({ color: colors.salmon.DEFAULT })}
			/>
		{/each}
	{/await}

	<SC.HemisphereLight intensity={0.4} />
	<!-- key -->
	<SC.DirectionalLight position={[4, 0, 0]} intensity={0.8} />
	<!-- fill -->
	<SC.DirectionalLight position={[-4, -1, -2]} intensity={0.8} />
	<!-- highlight -->
	<SC.DirectionalLight position={[4, 4, 0]} intensity={0.8} color={colors.gold.DEFAULT} />
	<SC.DirectionalLight position={[0, 0, 4]} intensity={0.8} color={colors.purple.DEFAULT} />
	<SC.DirectionalLight position={[-1, 1, -4]} intensity={0.8} color={colors.blue.DEFAULT} />

	<SC.OrbitControls enableZoom={false} />
</SC.Canvas>
