import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'eaglelion-mobile-dev',
		company: 'EagleLion Systems Technology',
		description: 'Developing the user-management service for a bank super-app in a microservice architecture. Developed the auth service for a local movie streaming app. Optimized a mongodb instance performance up-to 60% by integrating elastic search for highly performant indexing and search.',
		contract: ContractType.FullTime,
		type: 'Backend Development',
		location: 'Addis Ababa, Ethiopia',
		period: { from: new Date(2024, 6), to: new Date(2024, 11) },
		skills: getSkills('nestjs', 'ts', 'nodejs', 'expressjs', 'mongodb', 'postgresql', 'elasticsearch', 'kafka', 'redis', 'docker', 'restapi', 'socketio'),
		name: 'Backend Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Backend development focusing on microservices and database optimization'
	},
	{
		slug: '360-ground',
		company: '360 Ground',
		description: 'Built a local business management app which brought an average of 34% increase in profit in businesses that utilized the system. Developed and maintained a mobile banking application for a local bank (Abay Bank S.C Mobile Banking App).',
		contract: ContractType.PartTime,
		type: 'Mobile Development',
		location: 'Addis Ababa, Ethiopia',
		period: { from: new Date(2023, 10), to: new Date(2024, 7) },
		skills: getSkills('flutter', 'dart', 'firebase'),
		name: 'Mobile Application Developer',
		color: 'teal',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed business management and banking applications'
	},
	{
		slug: 'eaglelion-junior',
		company: 'EagleLion Systems Technology',
		description: 'Implemented core features, fixed bugs, and contributed to the overall codebase of a super app. Productionized a service in a microservice architecture. Migrated a service in a microservices architecture to a different cloud provider. Actively involved in testing and quality assurance for mobile and web apps.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Addis Ababa, Ethiopia',
		period: { from: new Date(2023, 6), to: new Date(2023, 10) },
		skills: getSkills('docker', 'nestjs', 'ts', 'aws'),
		name: 'Junior Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Full-stack development with focus on microservices'
	},
	{
		slug: 'linebeza',
		company: 'LineBeza Advertising',
		description: 'Led a cross-functional team to develop and deliver high-quality marketing and advertising solutions for various banks and organizations. Achieved a notable 21% increase in brand visibility for our clients, leading to additional partnerships and new business opportunities.',
		contract: ContractType.PartTime,
		type: 'Project Management',
		location: 'Addis Ababa, Ethiopia',
		period: { from: new Date(2023, 7), to: new Date(2023, 9) },
		skills: getSkills('leadership', 'team-management', 'communication', 'problem-solving'),
		name: 'Project Manager',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Led marketing and advertising projects for financial institutions'
	},
	{
		slug: 'eaglelion-intern',
		company: 'EagleLion Systems Technology',
		description: 'Developed a Full-Stack and fully online talent recruitment system which links job seekers with employers. Tested different apps and fixed major defects.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Addis Ababa, Ethiopia',
		period: { from: new Date(2023, 6), to: new Date(2023, 11) },
		skills: getSkills('reactjs', 'ts', 'nestjs'),
		name: 'Software Engineering Intern',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Full-stack development of recruitment platform'
	},
	{
		slug: 'kuraz-tech',
		company: 'Kuraz Technologies',
		description: 'Developed a flutter app for locally tuned fitness management solutions including workout planner and tracker with graphical analytics.',
		contract: ContractType.Internship,
		type: 'Mobile Development',
		location: 'Addis Ababa, Ethiopia',
		period: { from: new Date(2023, 4), to: new Date(2023, 11) },
		skills: getSkills('flutter', 'dart'),
		name: 'Software Engineering Intern',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed fitness management mobile application'
	},
	{
		slug: 'zin-tech',
		company: 'Zin Tech Solutions',
		description: 'Designed and developed websites for different firms which drastically increased their exposure in the market and boosted their customer base by 14% average.',
		contract: ContractType.PartTime,
		type: 'Web Development',
		location: 'Addis Ababa, Ethiopia',
		period: { from: new Date(2022, 8), to: new Date(2023, 6) },
		skills: getSkills('reactjs', 'ts', 'nextjs'),
		name: 'Web Developer',
		color: 'cyan',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Built high-impact websites for businesses'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
