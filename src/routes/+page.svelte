<script lang='ts'>
	import { HHKBs } from '@/hhkb';
	import { hhkb } from '@/runes.svelte';
	import Divider from './Divider.svelte';
	import LengthToHhkb from './LengthToHHKB.svelte';
	import PriceToHhkb from './PriceToHHKB.svelte';
	import WeightToHhkb from './WeightToHHKB.svelte';
</script>

<header animate-pulse fcc flex='~ col sm:row' font-italic gap-y-0 mb-flex pb-10>
	<select
		class='select select-lg'
		font-italic
		text='2xl sm:5xl center'
		bind:value={hhkb.name}
	>
		{#each Object.entries(HHKBs) as [name] (name)}
			<option value={name}>{name}</option>
		{/each}

	</select>
	<h1 text='2xl sm:5xl'>
		equals...
	</h1>
</header>

<LengthToHhkb />

<Divider />

<WeightToHhkb />

<Divider />

<PriceToHhkb />
