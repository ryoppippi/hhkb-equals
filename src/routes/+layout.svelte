<script>
	import Divider from './Divider.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>HHKBs equals.... </title>
</svelte:head>

<div m-10>
	{@render children()}

	<Divider />

	<a
		aria-label='GitHub repository'
		href='https://github.com/ryoppippi/hhkb-equals'
		target='_blank'
	>
		<div h-8 i-line-md-github-loop w-8 />
	</a>

	<p>MIT License</p>
	<p>Copyright (c) 2024 ryoppippi</p>
</div>
