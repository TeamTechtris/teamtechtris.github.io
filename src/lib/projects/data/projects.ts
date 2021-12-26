export interface Project {
	name: string;
	description: string;
	src: string;
	href: string;
}

export type ProjectID = 'helloworld';

export const projects: Record<ProjectID, Project> = {
	helloworld: {
		name: 'HelloWorld',
		description:
			'An AR application to re-live and reminiscence your travel adventures in the face of border restrictions.',
		src: 'projects/helloworld.png',
		href: 'https://news.smu.edu.sg/news/2021/07/02/smus-computing-and-information-systems-team-emerged-champions-dsta-hackathon',
	},
};
