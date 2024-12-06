import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'BSc in Software Engineering',
		description: '',
		location: 'Debre Birhan, Ethiopia',
		logo: Assets.DBU,
		name: '',
		organization: 'DBU',
		period: { from: new Date(2019, 10, 20), to: new Date(2024, 6, 29) },
		shortDescription: '',
		slug: 'se-bsc',
		subjects: ['Java', 'C++', 'Python', 'Web Development', 'Databases', 'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'Computer Architecture', 'Project Management' ]
	},
	{
		degree: 'Data Science',
		description: '',
		location: 'South Africa',
		logo: Assets.ExploreAI,
		name: '',
		organization: 'Explore AI Academy',
		period: { from: new Date(2023, 9, 11), to: new Date(2024, 7, 29) },
		shortDescription: '',
		slug: 'ds-eai-certificate',
		subjects: ['Python', 'Data Analysis', 'Data Visualization', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Big Data', 'Data Engineering', 'Data Science Project' ],
	},
	{
		degree: 'BA in Management',
		description: '',
		location: 'Debre Birhan, Ethiopia',
		logo: Assets.DBU,
		name: '',
		organization: 'DBU',
		period: { from: new Date(2019, 11, 10), to: new Date(2024, 6, 29) },
		shortDescription: '',
		slug: 'mgmt-ba',
		subjects: ['Management', 'Marketing', 'Accounting', 'Finance', 'Economics', 'Business Law', 'Business Communication', 'Business Ethics', 'Business Statistics', 'Business Research Methods', 'Human Resource Management', 'Organizational Behavior', 'Strategic Management' ]
	},
	{
		degree: 'Full Stack Software Engineering',
		description: '',
		location: 'Online, USA',
		logo: Assets.Holberton,
		name: '',
		organization: 'Holberton School',
		period: { from: new Date(2023, 11, 20), to: new Date(2025, 1, 18) },
		shortDescription: '',
		slug: 'se-holberton',
		subjects: ['C', 'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'SQL', 'NoSQL', 'Docker', 'CI/CD', 'Web Development', 'System Engineering', 'DevOps', 'Project Management' ],
	},
	
];

const EducationData = { title, items };

export default EducationData;
