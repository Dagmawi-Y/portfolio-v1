<script lang="ts">
	import Title from '$lib/components/common/title/title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import CarouselContent from '$lib/components/ui/carousel/carousel-content.svelte';
	import CarouselItem from '$lib/components/ui/carousel/carousel-item.svelte';
	import CarouselNext from '$lib/components/ui/carousel/carousel-next.svelte';
	import CarouselPrevious from '$lib/components/ui/carousel/carousel-previous.svelte';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import HomeData from '$lib/data/home';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { onMount } from 'svelte';
	import ContactForm from '$lib/components/contact-form/contact-form.svelte';
	import SeoMeta from '$lib/components/seo/seo-meta.svelte';

	let api: CarouselAPI;
	let showContactForm = false;
	let shouldShowSparkles = false;

	let currentGradient = {
		firstLine: { start: 240, end: 30 }, // Initial blue to brown
		secondLine: { start: 30, end: 240 } // Initial brown to blue
	};

	function generateRandomHue() {
		return Math.floor(Math.random() * 360);
	}

	function updateGradient() {
		currentGradient = {
			firstLine: {
				start: generateRandomHue(),
				end: generateRandomHue()
			},
			secondLine: {
				start: generateRandomHue(),
				end: generateRandomHue()
			}
		};
	}

	onMount(() => {
		setInterval(() => {
			if (!api) return;
			api.scrollNext();
		}, 2000);
	});

	let sparklesContainer: HTMLDivElement | null = null;

	function handleFormOpen() {
		showContactForm = true;
		shouldShowSparkles = true;
		createSparkles();
	}

	function handleFormCancel() {
		shouldShowSparkles = false;
		if (sparklesContainer) {
			document.body.removeChild(sparklesContainer);
			sparklesContainer = null;
		}
		showContactForm = false;
	}

	function createSparkles() {
		// Remove existing sparkles if any
		if (sparklesContainer) {
			document.body.removeChild(sparklesContainer);
		}

		sparklesContainer = document.createElement('div');
		sparklesContainer.style.cssText = `
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
			z-index: 40;
			filter: blur(2px);
		`;
		document.body.insertBefore(sparklesContainer, document.body.firstChild);

		const sparkles = Array.from({ length: 50 }, () => {
			const sparkle = document.createElement('div');
			sparkle.style.cssText = `
				position: absolute;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: hsl(${Math.random() * 360}, 100%, 70%);
				left: ${Math.random() * 100}vw;
				top: ${Math.random() * 100}vh;
				transform: scale(0);
				transition: transform 0.5s ease-out, opacity 0.5s ease-out;
				opacity: 0;
			`;
			if (sparklesContainer) sparklesContainer.appendChild(sparkle);
			return sparkle;
		});

		// Animate sparkles in
		sparkles.forEach((sparkle, i) => {
			setTimeout(() => {
				sparkle.style.transform = 'scale(1)';
				sparkle.style.opacity = '1';
			}, i * 20);
		});
	}

	function removeSparkles() {
		if (!sparklesContainer) return;

		const sparkles = Array.from(sparklesContainer.children) as HTMLElement[];
		
		// Add a delay before starting the fade out
		setTimeout(() => {
			// Animate sparkles out
			sparkles.forEach((sparkle, i) => {
				setTimeout(() => {
					sparkle.style.transform = 'scale(1.5)';
					sparkle.style.opacity = '0';
				}, i * 20);
			});

			// Remove container after animations
			setTimeout(() => {
				if (sparklesContainer) {
					sparklesContainer.style.opacity = '0';
					setTimeout(() => {
						if (sparklesContainer && sparklesContainer.parentNode) {
							document.body.removeChild(sparklesContainer);
							sparklesContainer = null;
						}
					}, 500);
				}
			}, sparkles.length * 20 + 500);
		}, 1000); // Wait 1 second before starting the fade out
	}

	$: if (!showContactForm && shouldShowSparkles) {
		removeSparkles();
	}

	let isHovered = false;
	let contentContainer: HTMLElement;

	function handleMouseEnter() {
		isHovered = true;
		updateGradient();
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<SeoMeta
	title="Home"
	description="Meet Dagmawi Yohannes (Daggy) - Leading Ethiopian Software Engineer based in Addis Ababa. Expert in full-stack development, cloud computing, and AI/ML with a passion for innovative solutions."
	keywords="Dagmawi Yohannes, Daggy, Ethiopian Developer, Software Engineer Ethiopia, Software Engineer Addis Ababa, Ethiopian Programmer, Ethiopian Software Developer, Dagmawi, Software Developer Addis Ababa, Tech Expert Ethiopia"
	url="https://dagmawi.me"
/>

<style>
	@keyframes sparkle {
		0% {
			transform: scale(0) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: scale(1.5) rotate(180deg);
			opacity: 0;
		}
	}

	.rainbow-text {
		cursor: pointer;
		display: inline-block;
		position: relative;
		z-index: 10;
	}

	.rainbow-text span {
		display: inline-block;
		opacity: 0.5;
		transition: all 0.3s ease;
	}

	.rainbow-text:hover span {
		opacity: 1;
	}

	.content-container {
		transition: all 0.3s ease;
		position: relative;
	}

	.content-container.blurred > *:not(.name-description-container),
		.content-container.blurred .name-description-container > *:not(.rainbow-text):not(.description-container) {
		filter: blur(5px);
		opacity: 0.5;
		pointer-events: none;
		transition: all 0.3s ease;
	}

	.name-description-container {
		position: relative;
		z-index: 5;
		width: 100%;
		max-width: 600px;
	}

	.description-container {
		position: relative;
		min-height: 2em;
		width: 100%;
		overflow: visible;
		z-index: 5;
	}

	.description-container p {
		margin: 0;
		width: 100%;
		text-align: center;
		transition: all 0.3s ease;
		background-color: var(--background);
	}

	@media (min-width: 768px) {
		.description-container p {
			text-align: justify;
		}
	}

	.default-description {
		transform: translateY(0);
		opacity: 1;
		position: relative;
	}

	.default-description.hidden {
		transform: translateY(-20px);
		opacity: 0;
	}

	.detailed-description {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(20px);
		opacity: 0;
		z-index: 1;
		transition: all 0.3s ease;
	}

	.detailed-description.show {
		transform: translateY(0);
		opacity: 1;
		z-index: 25;
	}

	.click-hint {
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.click-hint.show {
		opacity: 1;
		visibility: visible;
	}

	@keyframes rainbow-wave {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.social-links {
		position: relative;
		z-index: 15;
		pointer-events: auto;
	}
</style>

<Title title={HomeData.title} />
<ResponsiveContainer className="flex flex-col justify-center flex-1">
	<div
		bind:this={contentContainer}
		class="content-container flex flex-1 flex-col items-center justify-center gap-8 px-14 md:flex-row md:justify-center mt-5"
		class:blurred={isHovered}
	>
		<img 
			src="/images/me@360.jpg" 
			class="h-[200px] w-[200px] rounded-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-300" 
			alt="Avatar" 
		/>
		<div class="name-description-container flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left">
			<H1>
				<div 
					class="rainbow-text" 
					role="button"
					tabindex="0"
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					on:click={handleFormOpen}
					on:keydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							handleFormOpen();
						}
					}}
				>
					{#each HomeData.hero.title.split('\n') as line, lineIndex}
						<div>
							{#each line.split('') as char, i}
								<span 
									style="
										animation-delay: {i * 0.05}s; 
										color: hsl({
											lineIndex === 0 
												? currentGradient.firstLine.start + (i * (currentGradient.firstLine.end - currentGradient.firstLine.start) / line.length)
												: currentGradient.secondLine.start + (i * (currentGradient.secondLine.end - currentGradient.secondLine.start) / line.length)
										}, 70%, 50%);
									"
								>{char}</span>
							{/each}
						</div>
					{/each}
				</div>
			</H1>
			<div class="description-container w-full">
				<p class="default-description" class:hidden={isHovered}>{HomeData.hero.description}</p>
				<p 
					class="detailed-description" 
					class:show={isHovered}
				>
					I'm A <b>Software Engineer</b> from <b>Ethiopia</b> with expertise in Full-Stack
					development. I'm also a well-rounded <b>Mobile App Developer</b>, with extensive experience building real-world, large-scale mobile solutions.<br /><br>
					<b>With 4+ years of experience,</b> I genuinely love what I do—every day feels like an exciting adventure
					through the digital world, and getting paid for it is just the cherry on top!
					<br /><b>Psst... click the name to be part of the adventure!</b>
				</p>
			</div>
			<div class="social-links flex flex-row gap-1">
				{#each HomeData.hero.links as item}
					<a href={item.href} target="_blank">
						<Tooltip>
							<TooltipTrigger>
								<Button variant="outline" size="icon">
									<Icon icon={item.icon} className="text-lg" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="bottom">{item.label}</TooltipContent>
						</Tooltip>
					</a>
				{/each}
			</div>
		</div>
		<div>
			<Carousel bind:api class="w-[200px] md:ml-14" opts={{ loop: true }}>
				<CarouselContent>
					{#each HomeData.carousel as item}
						<CarouselItem class="flex flex-col items-center justify-center gap-4">
							<img
								src={$mode === 'dark' ? item.logo.dark : item.logo.light}
								class="h-[150px] w-[150px]"
								alt={item.name}
							/>
							<a href={href(`/skills/${item.slug}`)}>
								<Button variant="ghost">
									{item.name}
								</Button>
							</a>
						</CarouselItem>
					{/each}
				</CarouselContent>
				<CarouselNext />
				<CarouselPrevious />
			</Carousel>
		</div>
	</div>
</ResponsiveContainer>

{#if showContactForm}
	<ContactForm 
		bind:showContactForm 
		on:cancel={handleFormCancel}
	/>
{/if}
