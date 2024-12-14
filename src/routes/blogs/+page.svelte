<script lang="ts">
	import Title from '$lib/components/common/title/title.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';
	import Muted from '$lib/components/ui/typography/muted.svelte';

	let container: HTMLElement;

	onMount(() => {
		lottie.loadAnimation({
			container,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: '/lotties/blog-lottie.json'
		});
	});
</script>

<Title title="Blogs" />
<ResponsiveContainer className="flex flex-1 flex-col items-center justify-center gap-12">
	<div class="flex flex-col items-center justify-center gap-4 text-center max-w-2xl">
		<div class="relative">
			<H1 class="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">Coming Soon</H1>
			<div class="absolute -top-6 -right-6">
				<div class="text-xl animate-bounce">🔥</div>
			</div>
		</div>
		<div class="max-w-md mx-auto">
			<Muted class="text-lg font-charter leading-relaxed">
				Exciting content is brewing! <br><br>
				My blog section is under construction, but I'm working hard to bring you insightful articles and engaging stories.
			</Muted>
		</div>
		<div bind:this={container} class="w-[350px] h-[350px] mt-2" ></div>
	</div>
</ResponsiveContainer>

<style>
	:global(.dark) H1 {
		background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)));
	}

	@font-face {
		font-family: 'Charter';
		src: url('https://glyph.medium.com/font/81d2bf1/0-3j_4g_6bu_6c4_6c8_6c9_6cc_6cd_6ci_6cm/charter-400-italic.woff')
			format('woff');
		font-weight: 400;
		font-style: normal;
	}

	:global(.font-charter) {
		font-family: Charter, Georgia, Cambria, "Times New Roman", Times, serif;
	}
</style> 