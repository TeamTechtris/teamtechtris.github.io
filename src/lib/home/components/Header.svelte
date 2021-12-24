<script lang="ts">
	import { colors } from '$lib/core/theme';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
</script>

<section class="relative bg-gradient-to-b from-pink/50">
	<header class="max-w-screen-md p-8 mx-auto">
		<h1 class="mt-32 text-6xl font-bold drop-shadow-lg text-gradient">Techtris</h1>
		<p>T-spinning since 2019</p>
	</header>
	<div class="absolute inset-0 left-1/2">
		<SC.Canvas alpha antialias>
			<SC.Mesh
				geometry={new THREE.BoxGeometry()}
				material={new THREE.MeshStandardMaterial({ color: colors.gold.DEFAULT })}
			/>
			<SC.PerspectiveCamera position={[1, 1, 3]} />
			<SC.AmbientLight intensity={0.6} />
			<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
		</SC.Canvas>
	</div>
</section>
