export interface Project {
	name: string;
}

export type ProjectID = 'helloworld' | 'kopi-time' | 'como-club' | 'wok_n_roll';

export const projects: Record<ProjectID, Project> = {
	helloworld: { name: 'HelloWorld' },
	'kopi-time': { name: 'Kopi Time' },
	'como-club': { name: 'COMO Club' },
	wok_n_roll: { name: 'Wok N Roll' },
};
