<script lang='ts'>
	import { hhkb } from '@/runes.svelte';

	import {
		type Grams,
		type Mass,
		MASS_UNITS,
		toGrams,
	} from '@/units';

	let weight = $state<Mass>(50 as Grams);
	let unit = $state(MASS_UNITS[0]);
</script>

<div gap-y-3 gcc>
	<h1 text-3xl>Weight to HHKBs</h1>
	<div gap-2 gcc sm-fcc>
		<div class='join'>
			<input
				class='input input-bordered join-item'
				placeholder='weight'
				type='text'
				w-30
				bind:value={weight}
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

		<div class='join'>
			<p class='join-item' decoration-sky-500 text-2xl text-bold underline>
				{(toGrams(weight, unit) / hhkb.info.weight).toFixed(2)} HHKBs
			</p>
		</div>
	</div>
</div>
