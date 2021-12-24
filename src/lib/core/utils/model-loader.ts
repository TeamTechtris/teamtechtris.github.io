import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { BufferGeometry, Material, Mesh } from 'three';

export const loadGLTF = (url: string): Promise<GLTF> => {
	const gltfLoader = new GLTFLoader();
	return new Promise((resolve, reject) => {
		gltfLoader.load(
			url,
			(gltf) => {
				resolve(gltf);
			},
			undefined,
			reject
		);
	});
};

export const loadOBJ = (
	objUrl: string,
	mtlUrl: string
): Promise<Mesh<BufferGeometry, Material>[]> => {
	const mtlLoader = new MTLLoader();
	const objLoader = new OBJLoader();
	return new Promise((resolve, reject) => {
		mtlLoader.load(
			mtlUrl,
			(mtl) => {
				mtl.preload();
				objLoader.setMaterials(mtl);
				objLoader.load(
					objUrl,
					(group) => {
						resolve(group.children as Mesh<BufferGeometry, Material>[]);
					},
					undefined,
					reject
				);
			},
			undefined,
			reject
		);
	});
};
