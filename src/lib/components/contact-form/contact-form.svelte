<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$lib/components/ui/select';
	import { toast } from 'svelte-sonner';
	import { fade } from 'svelte/transition';
	import type { Selected } from 'bits-ui';

	export let showContactForm: boolean;

	let email = '';
	let phone = '';
	let service: Selected<string> | undefined = undefined;
	let isSubmitting = false;

	const services = [
		'Web Development',
		'Mobile App Development',
		'UI/UX Design',
		'Cloud Solutions',
		'DevOps Services',
		'Custom Software Development'
	];

	function validateEmail(email: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	function validatePhone(phone: string) {
		return /^\+?[\d\s-]{10,}$/.test(phone);
	}

	async function handleSubmit() {
		if (!email || !phone || !service) {
			toast.error('Please fill in all fields');
			return;
		}

		if (!validateEmail(email)) {
			toast.error('Please enter a valid email address');
			return;
		}

		if (!validatePhone(phone)) {
			toast.error('Please enter a valid phone number');
			return;
		}

		isSubmitting = true;

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			toast.success('Thank you for your interest! We will contact you soon.');
			showContactForm = false;
		} catch (error) {
			toast.error('Something went wrong. Please try again.');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div
	class="fixed inset-0 z-[45] bg-background/80 backdrop-blur-sm"
	transition:fade={{ duration: 200 }}
>
	<div class="fixed left-[50%] top-[50%] z-[45] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
		<div class="flex flex-col space-y-1.5 text-center sm:text-left">
			<h2 class="text-2xl font-semibold leading-none tracking-tight">Get in Touch</h2>
			<p class="text-sm text-muted-foreground">
				Let me know what you need and I'll get back to you shortly.
			</p>
		</div>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="space-y-2">
				<Label for="service">What service are you interested in?</Label>
				<Select bind:selected={service} required>
					<SelectTrigger>
						<SelectValue placeholder="Select a service" />
					</SelectTrigger>
					<SelectContent>
						{#each services as service}
							<SelectItem value={service}>{service}</SelectItem>
						{/each}
					</SelectContent>
				</Select>
			</div>
			<div class="space-y-2">
				<Label for="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="you@example.com"
					bind:value={email}
					required
				/>
			</div>
			<div class="space-y-2">
				<Label for="phone">Phone Number</Label>
				<Input
					id="phone"
					type="tel"
					placeholder="+1 234 567 8900"
					bind:value={phone}
					required
				/>
			</div>
			<div class="flex justify-end gap-2">
				<Button variant="outline" on:click={() => (showContactForm = false)}>
					Cancel
				</Button>
				<Button type="submit" disabled={isSubmitting}>
					{#if isSubmitting}
						Submitting...
					{:else}
						Submit
					{/if}
				</Button>
			</div>
		</form>
	</div>
</div> 