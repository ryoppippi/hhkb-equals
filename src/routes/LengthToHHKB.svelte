<script lang='ts'>
	import type { StringKeyOf } from 'type-fest';
	import { HHKBs } from '@/hhkb';
	import { type Length, LENGTH_UNITS, toMillimeters } from '@/units';

	let length = $state<Length>(50 as Length);
	let unit = $state(LENGTH_UNITS[1]);
	let hhkbName = $state<StringKeyOf<typeof HHKBs>>('HHKB Hybrid Type-S');

</script>

<div gap-y-3 gcc>
	<h1 text-3xl>Length to HHKBs</h1>
	<div gap-2 gcc md-fcc>
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

		<select
			class='select select-bordered'
			bind:value={hhkbName}
		>
			{#each Object.entries(HHKBs) as [name] (name)}
				<option value={name}>{name}</option>
			{/each}
		</select>

		<div i-uis-multiply />

		<p class='join-item' decoration-sky-500 text-2xl text-bold underline>
			{(toMillimeters(length, unit) / HHKBs[hhkbName].width).toFixed(2)} HHKBs
		</p>
	</div>
</div>
