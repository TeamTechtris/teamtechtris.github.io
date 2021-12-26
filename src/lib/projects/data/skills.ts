import type { ProjectID } from './projects';

export interface Skill {
	name: string;
	src: string;
}

export type SkillID =
	| 'ansible'
	| 'aws'
	| 'c'
	| 'cloudformation'
	| 'docker'
	| 'eslint'
	| 'firebase'
	| 'flask'
	| 'gh_actions'
	| 'gitlab'
	| 'graphql'
	| 'java'
	| 'javascript'
	| 'mysql'
	| 'nextjs'
	| 'nginx'
	| 'nodejs'
	| 'npm'
	| 'prettier'
	| 'python'
	| 'rabbitmq'
	| 'react'
	| 'react_native'
	| 'redux'
	| 'rest'
	| 'rxjs'
	| 'scikit_learn'
	| 'spring'
	| 'svelte'
	| 'sveltekit'
	| 'swift'
	| 'tailwindcss'
	| 'typescript'
	| 'vercel'
	| 'vim';

export const skills: Record<SkillID, Skill> = {
	ansible: { name: 'Ansible', src: 'skills/ansible.svg' },
	aws: { name: 'Amazon Web Services', src: 'skills/aws.svg' },
	c: { name: 'C', src: 'skills/c.svg' },
	cloudformation: { name: 'CloudFormation', src: 'skills/cloudformation.svg' },
	docker: { name: 'Docker', src: 'skills/docker.svg' },
	eslint: { name: 'ESLint', src: 'skills/eslint.svg' },
	firebase: { name: 'Firebase', src: 'skills/firebase.svg' },
	flask: { name: 'Flask', src: 'skills/flask.svg' },
	gh_actions: { name: 'Github Actions', src: 'skills/gh_actions.png' },
	gitlab: { name: 'GitLab', src: 'skills/gitlab.svg' },
	graphql: { name: 'GraphQL', src: 'skills/graphql.svg' },
	java: { name: 'Java', src: 'skills/java.svg' },
	javascript: { name: 'JavaScript', src: 'skills/javascript.svg' },
	mysql: { name: 'MySQL', src: 'skills/mysql.svg' },
	nextjs: { name: 'Next.js', src: 'skills/nextjs.svg' },
	nginx: { name: 'nginx', src: 'skills/nginx.svg' },
	nodejs: { name: 'Node.js', src: 'skills/nodejs.svg' },
	npm: { name: 'npm.js', src: 'skills/npm.svg' },
	prettier: { name: 'Prettier', src: 'skills/prettier.svg' },
	python: { name: 'Python', src: 'skills/python.svg' },
	rabbitmq: { name: 'RabbitMQ', src: 'skills/rabbitmq.svg' },
	react: { name: 'React', src: 'skills/reactjs.svg' },
	react_native: { name: 'React Native', src: 'skills/react_native.png' },
	redux: { name: 'Redux', src: 'skills/redux.svg' },
	rest: { name: 'RESTful', src: 'skills/rest.png' },
	rxjs: { name: 'RxJS', src: 'skills/rxjs.svg' },
	scikit_learn: { name: 'scikit-learn', src: 'skills/scikit_learn.svg' },
	spring: { name: 'Spring', src: 'skills/springio.svg' },
	svelte: { name: 'Svelte', src: 'skills/svelte.svg' },
	sveltekit: { name: 'SvelteKit', src: 'skills/sveltekit.png' },
	swift: { name: 'Swift', src: 'skills/swift.svg' },
	tailwindcss: { name: 'Tailwind CSS', src: 'skills/tailwindcss.svg' },
	typescript: { name: 'TypeScript', src: 'skills/typescript.svg' },
	vercel: { name: 'Vercel', src: 'skills/vercel.svg' },
	vim: { name: 'Vim', src: 'skills/vim.svg' },
};

export const projectSkills: [ProjectID, SkillID][] = [
	// helloworld
	['helloworld', 'react'],
	['helloworld', 'react_native'],
	// kopi-time
	['kopi-time', 'typescript'],
	['kopi-time', 'python'],
	['kopi-time', 'react'],
	['kopi-time', 'nextjs'],
	['kopi-time', 'tailwindcss'],
	['kopi-time', 'nodejs'],
	['kopi-time', 'flask'],
	['kopi-time', 'graphql'],
	['kopi-time', 'rest'],
	['kopi-time', 'rabbitmq'],
	['kopi-time', 'mysql'],
	['kopi-time', 'nginx'],
	['kopi-time', 'eslint'],
	['kopi-time', 'prettier'],
	['kopi-time', 'gitlab'],
	['kopi-time', 'docker'],
	['kopi-time', 'aws'],
	// como-club
	['como-club', 'typescript'],
	['como-club', 'python'],
	['como-club', 'svelte'],
	['como-club', 'sveltekit'],
	['como-club', 'tailwindcss'],
	['como-club', 'flask'],
	['como-club', 'rest'],
	['como-club', 'rabbitmq'],
	['como-club', 'eslint'],
	['como-club', 'prettier'],
	['como-club', 'gh_actions'],
	['como-club', 'docker'],
	['como-club', 'cloudformation'],
	['como-club', 'aws'],
];
