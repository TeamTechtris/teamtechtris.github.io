export interface Member {
	name: string;
	src: string;
	github: string;
	linkedin: string;
	website?: string;
	preferred: 'github' | 'linkedin' | 'website';
}

export const members: Member[] = [
	{
		name: 'Bryan Lee',
		src: 'images/bryan.jpeg',
		github: 'https://github.com/bryanmylee',
		linkedin: 'https://www.linkedin.com/in/bryan-lee-min-yuan/',
		website: 'https://bryanmylee.com',
		preferred: 'website',
	},
	{
		name: 'Christopher Lim',
		src: 'images/chris.png',
		github: 'https://github.com/christopherlim98',
		linkedin: 'https://www.linkedin.com/in/christopher-lim-sheng-yong/',
		preferred: 'linkedin',
	},
	{
		name: 'Ko Huining',
		src: 'images/huining.png',
		github: 'https://github.com/kohuining',
		linkedin: 'https://www.linkedin.com/in/huiningko/',
		preferred: 'linkedin',
	},
	{
		name: 'Justina Wong',
		src: 'images/justina.png',
		github: 'https://github.com/sassquatch00',
		linkedin: 'https://www.linkedin.com/in/justinawong2000/',
		preferred: 'linkedin',
	},
	{
		name: 'Shawn Pang',
		src: 'images/shawn.jpeg',
		github: 'https://github.com/Optixal',
		linkedin: 'https://www.linkedin.com/in/shawn-pang/',
		preferred: 'github',
	},
];
