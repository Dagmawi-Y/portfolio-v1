<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import { scale } from "svelte/transition";
	import { quadOut } from "svelte/easing";

	type $$Props = SelectPrimitive.ContentProps;

	let className: $$Props["class"] = undefined;
	export { className as class };

	export let sideOffset = 4;
	export let side: "top" | "right" | "bottom" | "left" = "bottom";
	export let align: "start" | "center" | "end" = "start";
</script>

<SelectPrimitive.Content
	transition={scale}
	transitionConfig={{ duration: 200, easing: quadOut }}
	{side}
	{align}
	{sideOffset}
	class={cn(
		"relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
		side === "bottom" &&
			"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
		className
	)}
	{...$$restProps}
>
	<div
		class={cn(
			"p-1",
			side === "bottom" &&
				"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
		)}
	>
		<slot />
	</div>
</SelectPrimitive.Content> 