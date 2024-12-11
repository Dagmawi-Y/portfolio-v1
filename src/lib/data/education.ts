import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'BSc in Software Engineering',
		description: 'Completed a comprehensive software engineering program with a strong focus on both theoretical foundations and practical applications. Achieved academic excellence while participating in various software development projects. Gained extensive experience in system design, software architecture, and modern development practices. Developed strong problem-solving skills through algorithmic challenges and real-world project implementations.',
		location: 'Debre Birhan, Ethiopia',
		logo: Assets.DBU,
		name: 'Software Engineering',
		organization: 'DBU',
		period: { from: new Date(2019, 10, 20), to: new Date(2024, 6, 29) },
		shortDescription: 'Comprehensive software engineering education with focus on practical applications',
		slug: 'se-bsc',
		subjects: ['Java', 'C++', 'Python', 'Web Development', 'Databases', 'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'Computer Architecture', 'Project Management' ]
	},
	{
		degree: 'Data Science',
		description: 'Engaged in an intensive data science program focusing on advanced analytics and machine learning. Worked on real-world projects involving data analysis, predictive modeling, and business intelligence. Developed expertise in Python-based data science tools and frameworks. Gained hands-on experience with big data technologies and data visualization techniques.',
		location: 'South Africa',
		logo: Assets.ExploreAI,
		name: 'Data Science',
		organization: 'Explore AI Academy',
		period: { from: new Date(2023, 9, 11), to: new Date(2024, 7, 29) },
		shortDescription: 'Advanced data science training with focus on machine learning and analytics',
		slug: 'ds-eai-certificate',
		subjects: ['Python', 'Data Analysis', 'Data Visualization', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Big Data', 'Data Engineering', 'Data Science Project' ]
	},
	{
		degree: 'BA in Management',
		description: 'Pursued a parallel degree in management to complement technical skills with business acumen. Gained comprehensive understanding of business operations, strategic planning, and organizational behavior. Developed strong leadership and decision-making skills through case studies and practical projects. Combined management principles with technical knowledge to bridge the gap between business and technology.',
		location: 'Debre Birhan, Ethiopia',
		logo: Assets.DBU,
		name: 'Business Management',
		organization: 'DBU',
		period: { from: new Date(2019, 11, 10), to: new Date(2024, 6, 29) },
		shortDescription: 'Business management education focusing on leadership and strategic planning',
		slug: 'mgmt-ba',
		subjects: ['Management', 'Marketing', 'Accounting', 'Finance', 'Economics', 'Business Law', 'Business Communication', 'Business Ethics', 'Business Statistics', 'Business Research Methods', 'Human Resource Management', 'Organizational Behavior', 'Strategic Management' ]
	},
	{
		degree: 'Full Stack Software Engineering',
		description: 'Currently enrolled in an intensive full-stack software engineering program with a project-based learning approach. Focusing on modern web technologies, DevOps practices, and system architecture. Gaining hands-on experience with industry-standard tools and methodologies. Developing expertise in both front-end and back-end development while working on real-world projects.',
		location: 'Online, USA',
		logo: Assets.Holberton,
		name: 'Full Stack Engineering',
		organization: 'Holberton School',
		period: { from: new Date(2023, 11, 20), to: new Date(2025, 1, 18) },
		shortDescription: 'Intensive full-stack engineering program with focus on practical skills',
		slug: 'se-holberton',
		subjects: ['C', 'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'SQL', 'NoSQL', 'Docker', 'CI/CD', 'Web Development', 'System Engineering', 'DevOps', 'Project Management' ]
	}
];

const EducationData = { title, items };

export default EducationData;
