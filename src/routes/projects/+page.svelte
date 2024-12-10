<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import ProjectsData from '$lib/data/projects';
	import SkillsData from '$lib/data/skills';
	import type { Skill } from '$lib/data/types';
	import { onMount } from 'svelte';
	import { mode } from 'mode-watcher';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = $state(
		SkillsData.items.filter((it) => {
			return ProjectsData.items.some((project) =>
				project.skills.some((skill) => skill.slug === it.slug)
			);
		})
	);

	let search = $state('');
	let result = $derived(
		ProjectsData.items
			.sort((a, b) => {
				const dateA = a.period.to || new Date();
				const dateB = b.period.to || new Date();
				return dateB.getTime() - dateA.getTime();
			})
			.filter((project) => {
				const isFiltered =
					filters.every((item) => !item.isSelected) ||
					project.skills.some((tech) =>
						filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
					);

				const isSearched =
					search.trim().length === 0 ||
					project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

				return isFiltered && isSearched;
			})
	);

	const toggleSelected = (slug: string) => {
		filters = filters.map((it) => (it.slug === slug ? { ...it, isSelected: !it.isSelected } : it));
	};

	const onSearch = (query: string) => (search = query);

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage title={ProjectsData.title} {onSearch}>
	{#if result.length === 0}
		<EmptyResult />
	{:else}
		<div class="flex flex-col gap-4">
			<div class="flex flex-row flex-wrap gap-2">
				{#each filters as item (item.slug)}
					<Toggle
						pressed={item.isSelected}
						onPressedChange={() => toggleSelected(item.slug)}
						class="flex flex-row items-center gap-2"
					>
						<img
							src={$mode === 'dark' ? item.logo.dark : item.logo.light}
							class="h-[20px] w-[20px]"
							alt={item.name}
						/>
						<Icon icon="i-carbon-close" className={item.isSelected ? 'block' : 'hidden'} />
					</Toggle>
				{/each}
			</div>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each result as it (it.slug)}
					<ProjectCard project={it} />
				{/each}
			</div>
		</div>
	{/if}
</SearchPage>
