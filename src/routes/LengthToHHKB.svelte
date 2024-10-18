<script lang='ts'>
	import { hhkb } from '@/runes.svelte';
	import { type Length, LENGTH_UNITS, type Millimeters, toMillimeters } from '@/units';

	let length = $state<Length>(294 as Millimeters);
	let unit = $state(LENGTH_UNITS[0]);
</script>

<div gap-y-3 gcc>
	<h1 text-3xl>Length to HHKBs</h1>
	<div gap-2 gcc sm-fcc>
		<div class='join'>
			<input
				class='input input-bordered join-item'
				placeholder='length'
				type='text'
				w-30
				bind:value={length}
			/>
			<select
				class='select select-bordered join-item'
				w-30
				bind:value={unit}
			>
				{#each LENGTH_UNITS as unit (unit)}
					<option value={unit}>{unit}</option>
				{/each}
			</select>
		</div>

		<div i-material-symbols-equal rotate='90 md:(180)' />

		<p class='join-item' decoration-sky-500 text-2xl text-bold underline>
			{(toMillimeters(length, unit) / hhkb.info.width).toFixed(2)} HHKBs
		</p>
	</div>
</div>
