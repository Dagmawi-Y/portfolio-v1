<script lang="ts">
	import { Select as SelectPrimitive, type Selected } from "bits-ui";
	import { cn } from "$lib/utils";
	import { createEventDispatcher } from "svelte";

	export let selected: Selected<unknown> | undefined = undefined;
	export let name: string | undefined = undefined;
	export let disabled: boolean = false;
	export let required: boolean = false;

	const dispatch = createEventDispatcher();

	function onSelectedChange(value: Selected<unknown> | undefined) {
		selected = value;
		dispatch('change', value);
	}
</script>

<SelectPrimitive.Root
	bind:selected
	{onSelectedChange}
	{name}
	{disabled}
	{required}
	{...$$restProps}
>
	<slot />
</SelectPrimitive.Root> 