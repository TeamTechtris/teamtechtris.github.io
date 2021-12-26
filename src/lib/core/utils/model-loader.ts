import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { Mesh } from 'three';

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

export const loadOBJ = (objUrl: string): Promise<Mesh[]> => {
	const objLoader = new OBJLoader();
	return new Promise((resolve, reject) => {
		objLoader.load(
			objUrl,
			(group) => {
				resolve(group.children as Mesh[]);
			},
			undefined,
			reject
		);
	});
};
