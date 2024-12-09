import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'merchant-super-app',
		color: '#5e95e3',
		description:
			'Developed the merchant segment of a mobile super app for a local bank on both Android and iOS platforms. The app features a pixel-perfect design and provides a seamless user experience across platforms, enabling merchants to manage transactions, view analytics, and handle customer interactions efficiently.',
		shortDescription:
			'A comprehensive mobile super app for merchants with integrated banking and business management features.',
		links: [],
		logo: Assets.Unknown,
		name: 'Merchant Super App',
		period: {
			from: new Date(2024, 6)
		},
		skills: getSkills('react-native', 'ts', 'js', 'reactjs'),
		type: 'Mobile Application'
	},
	{
		slug: 'teletv-player',
		color: '#ff3e00',
		description:
			'Created an innovative entertainment platform mobile app player for TeleTV that revolutionized content consumption. The app attracted over 10 million users within months of its launch, becoming a market sensation with its user-friendly interface and smooth streaming capabilities.',
		shortDescription:
			'A highly successful mobile entertainment platform with over 10M users.',
		links: [],
		logo: Assets.Unknown,
		name: 'TeleTV Mobile Player',
		period: {
			from: new Date(2024, 6)
		},
		skills: getSkills('react-native', 'ts', 'js'),
		type: 'Mobile Application'
	},
	{
		slug: 'cashgo-remittance',
		color: '#00ff00',
		description:
			'Contributed to the development of CashGO, a foreign remittance app that drives over a million dollars per day into Ethiopia\'s economy. The app revolutionizes cross-border transfers with its efficient and secure transaction processing system.',
		shortDescription:
			'A high-impact foreign remittance app processing millions in daily transactions.',
		links: [],
		logo: Assets.Unknown,
		name: 'CashGO Remittance',
		period: {
			from: new Date(2024, 6)
		},
		skills: getSkills('react-native', 'ts', 'js'),
		type: 'Mobile Application'
	},
	{
		slug: 'business-management-app',
		color: '#4287f5',
		description:
			'Developed a comprehensive local business management app that significantly improved business operations, resulting in an average 34% increase in profit for businesses that implemented the system. The app includes features for inventory management, sales tracking, and financial reporting.',
		shortDescription:
			'A business management solution that increased client profits by 34%.',
		links: [],
		logo: Assets.Unknown,
		name: 'Business Management System',
		period: {
			from: new Date(2023, 10),
			to: new Date(2024, 7)
		},
		skills: getSkills('flutter', 'dart', 'firebase'),
		type: 'Mobile Application'
	},
	{
		slug: 'abay-mobile-banking',
		color: '#42f5a7',
		description:
			'Developed and maintained a mobile banking application for Abay Bank S.C. The app provides customers with secure access to their accounts, enabling them to perform transactions, check balances, and manage their banking needs conveniently.',
		shortDescription:
			'A full-featured mobile banking application for Abay Bank S.C.',
		links: [],
		logo: Assets.Unknown,
		name: 'Abay Bank Mobile Banking',
		period: {
			from: new Date(2023, 10),
			to: new Date(2024, 7)
		},
		skills: getSkills('flutter', 'dart'),
		type: 'Mobile Application'
	},
	{
		slug: 'talent-recruitment-system',
		color: '#f542f2',
		description:
			'Developed a full-stack online talent recruitment system that efficiently connects job seekers with employers. The platform features automated matching, application tracking, and comprehensive candidate management tools.',
		shortDescription:
			'A modern recruitment platform connecting job seekers and employers.',
		links: [],
		logo: Assets.Unknown,
		name: 'Talent Recruitment Platform',
		period: {
			from: new Date(2023, 6),
			to: new Date(2023, 11)
		},
		skills: getSkills('reactjs', 'ts', 'nestjs'),
		type: 'Web Application'
	},
	{
		slug: 'fitness-tracker',
		color: '#f5d442',
		description:
			'Created a Flutter-based fitness management application featuring workout planning and tracking capabilities with detailed graphical analytics. The app provides personalized workout recommendations and progress tracking.',
		shortDescription:
			'A comprehensive fitness management app with analytics and tracking.',
		links: [],
		logo: Assets.Unknown,
		name: 'Fitness Management App',
		period: {
			from: new Date(2023, 4),
			to: new Date(2023, 11)
		},
		skills: getSkills('flutter', 'dart'),
		type: 'Mobile Application'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
