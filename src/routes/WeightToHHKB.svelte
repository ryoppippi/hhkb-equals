<script lang='ts'>
	import type { StringKeyOf } from 'type-fest';
	import { HHKBs } from '@/hhkb';

	import {
		type Grams,
		type Mass,
		MASS_UNITS,
		toGrams,
	} from '@/units';

	let width = $state<Mass>(50 as Grams);
	let unit = $state(MASS_UNITS[0]);
	let hhkbName = $state<StringKeyOf<typeof HHKBs>>('HHKB Hybrid Type-S');
</script>

<div gap-y-3 gcc>
	<h1 text-3xl>Weight to HHKBs</h1>
	<div gap-2 gcc md-fcc>
		<div class='join'>
			<input
				class='input input-bordered join-item'
				placeholder='width'
				type='text'
				w-30
				bind:value={width}
			/>
			<select
				class='select select-bordered join-item'
				w-30
				bind:value={unit}
			>
				{#each MASS_UNITS as unit (unit)}
					<option value={unit}>{unit}</option>
				{/each}
			</select>
		</div>

		<div i-material-symbols-equal rotate='90 md:(180)' />

		<select
			class='select select-bordered'
			bind:value={hhkbName}
		>
			{#each Object.entries(HHKBs) as [name] (name)}
				<option value={name}>{name}</option>
			{/each}
		</select>

		<div i-uis-multiply />

		<div class='join'>
			<p class='join-item' decoration-sky-500 text-2xl text-bold underline>
				{(toGrams(width, unit) / HHKBs[hhkbName].weight).toFixed(2)} HHKBs
			</p>
		</div>
	</div>
</div>
