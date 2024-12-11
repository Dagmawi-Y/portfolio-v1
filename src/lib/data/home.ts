import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.firstName}\n${BaseData.lastName}`,
	description:
		'Debugging life, one project at a time ⚡',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Dagmawi-Y', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/dagmawi-y-hailu', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Twitter', href: 'https://x.com/daggyohannes', icon: 'i-carbon-logo-twitter' },
		{ label: 'Email', href: 'mailto:dagmawi.inbox@gmail.com', icon: 'i-carbon-at' },
		{label: 'Telegram', href: 'https://t.me/dag_mawi', icon: 'i-carbon-logo-telegram'},
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
