import type { ProjectID } from './projects';

export interface Skill {
	name: string;
	src: string;
}

export type SkillID = 'react' | 'react_native';

export const skills: Record<SkillID, Skill> = {
	react: { name: 'React', src: 'skills/reactjs.svg' },
	react_native: { name: 'React Native', src: 'skills/react_native.png' },
};

export const projectSkills: [ProjectID, SkillID][] = [
	// helloworld
	['helloworld', 'react'],
	['helloworld', 'react_native'],
];
