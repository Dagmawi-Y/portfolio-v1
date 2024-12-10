import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Tools', slug: 'tools' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Proficient in JavaScript, with extensive experience in front-end and back-end development, including dynamic web applications and API integrations.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Skilled in TypeScript for building scalable and maintainable applications with strong typing and robust features.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'teal',
		description:
			'Expertise in Dart for cross-platform mobile app development, primarily using Flutter to create engaging user experiences.',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'green',
		description:
			'Proficient in Python for data analysis, machine learning, and backend development, leveraging libraries and frameworks like Pandas, NumPy, and Flask.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Extensive experience with React.js for building dynamic and responsive user interfaces, including SPAs and PWAs.',
		logo: Assets.ReactJs,
		name: 'React.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description:
			'Skilled in React Native for building cross-platform mobile apps with native performance and seamless UI/UX.',
		logo: Assets.ReactJs,
		name: 'React Native',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description:
			'Experienced in Flutter for crafting visually appealing and performant mobile applications.',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description:
			'Proficient in SQL for relational database management, complex queries, and data modeling.',
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'database'
	}),
	defineSkill({
		slug: 'nosql',
		color: 'green',
		description:
			'Experienced with NoSQL databases like MongoDB for handling dynamic and unstructured data efficiently.',
		logo: Assets.MongoDB,
		name: 'NoSQL',
		category: 'database'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Experienced in containerizing applications with Docker to streamline development workflows and ensure consistency across environments.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'bash',
		color: 'black',
		description:
			'Proficient in Bash scripting for automating tasks and managing system configurations effectively.',
		logo: Assets.Bash,
		name: 'Bash',
		category: 'scripting'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description:
			'Experienced with Git for version control, collaboration, and maintaining robust code repositories.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devops'
	}),
	defineSkill({
		slug: 'nestjs',
		color: 'red',
		description:
			'Skilled in NestJS for building scalable and maintainable backend services in a microservices architecture.',
		logo: Assets.NestJs,
		name: 'NestJS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description:
			'Proficient in Next.js for building server-side rendered React applications with excellent performance and SEO capabilities.',
		logo: Assets.NextJS,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			'Experienced in Svelte for creating highly reactive and efficient web applications with a lean development approach.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'sveltekit',
		color: 'orange',
		description:
			'Proficient in SvelteKit for building full-stack applications with streamlined routing and server-side rendering.',
		logo: Assets.Svelte,
		name: 'SvelteKit',
		category: 'framework'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description:
			'Experienced in using AWS services like EC2, S3, and RDS for scalable cloud infrastructure and storage solutions.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description:
			'Proficient in C for low-level programming, systems engineering, and performance-critical applications.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'green',
		description:
			'Skilled in Apache Kafka for building real-time data streaming and event-driven architectures.',
		logo: Assets.Kafka,
		name: 'Kafka',
		category: 'messaging'
	}),
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description:
			'Experienced with Nginx for web serving, load balancing, and acting as a reverse proxy for APIs.',
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'blue',
		description:
			'Proficient in NumPy for numerical computations and data analysis in Python.',
		logo: Assets.Numpy,
		name: 'NumPy',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'blue',
		description:
			'Experienced in Pandas for data manipulation, cleaning, and analysis in Python.',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'rabbitmq',
		color: 'green',
		description:
			'Skilled in RabbitMQ for message brokering and asynchronous communication between microservices.',
		logo: Assets.RabbitMQ,
		name: 'RabbitMQ',
		category: 'messaging'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'blue',
		description:
			'Proficient in Express.js for building robust and scalable backend services in Node.js.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description:
			'Experienced with Firebase for backend-as-a-service (BaaS) solutions, including real-time databases and authentication.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description:
			'Proficient in Redis for caching, session management, and optimizing application performance.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'database'
	}),
	defineSkill({
		slug: 'jira',
		color: 'blue',
		description:
			'Experienced with Jira for agile project management, issue tracking, and team collaboration.',
		logo: Assets.Unknown,
		name: 'Jira',
		category: 'tools'
	}),
	defineSkill({
		slug: 'trello',
		color: 'teal',
		description:
			'Skilled in Trello for task management, workflow organization, and team coordination.',
		logo: Assets.Unknown,
		name: 'Trello',
		category: 'tools'
	}),
	defineSkill({
		slug: 'leadership',
		color: 'purple',
		description:
			'Strong leadership abilities in guiding teams, setting clear objectives, and driving project success.',
		logo: Assets.Unknown,
		name: 'Leadership',
		category: 'soft'
	}),
	defineSkill({
		slug: 'team-management',
		color: 'indigo',
		description:
			'Experienced in managing cross-functional teams, fostering collaboration, and optimizing team performance.',
		logo: Assets.Unknown,
		name: 'Team Management',
		category: 'soft'
	}),
	defineSkill({
		slug: 'communication',
		color: 'pink',
		description:
			'Excellent communication skills in presenting ideas, facilitating meetings, and maintaining stakeholder relationships.',
		logo: Assets.Unknown,
		name: 'Communication',
		category: 'soft'
	}),
	defineSkill({
		slug: 'problem-solving',
		color: 'orange',
		description:
			'Strong analytical and problem-solving abilities to identify challenges and implement effective solutions.',
		logo: Assets.Unknown,
		name: 'Problem Solving',
		category: 'soft'
	})

] as const;


const SkillsData = {
	title,
	items
};

export default SkillsData;
