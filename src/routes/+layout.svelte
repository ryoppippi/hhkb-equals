<script>
	import Divider from './Divider.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	const { children } = $props();

	const title = 'HHKBs equals....';
	const description = 'Calculate the equivalent of HHKBs';

	const imageURL = `https://blog.tomoya.dev/posts/prototype-of-the-hhkb/hhkb-with-oven.jpg`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} property='og:title' />
	<meta name='twitter:title' content={title} />

	<meta name='description' content={description} />
	<meta content={description} property='og:description' />
	<meta name='twitter:description' content={description} />

	<meta content={imageURL} property='og:image' />
	<meta name='twitter:image' content={imageURL} />
	<meta name='twitter:card' content='summary' />
	<meta content={imageURL} property='og:image' />
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
