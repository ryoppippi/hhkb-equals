<script lang='ts'>
	import { hhkb } from '@/runes.svelte';
	import {
		CURRENCIES,
		type Currency,
		type JPY,
		toJpy,
	} from '@/units';

	let price = $state<Currency>(36850 as JPY);
	let unit = $state(CURRENCIES[0]);
</script>

<div gap-y-3 gcc>
	<h1 text-3xl>Price to HHKBs</h1>
	<div gap-2 gcc sm-fcc>
		<div class='join'>
			<input
				class='input input-bordered join-item'
				placeholder='price'
				type='number'
				w-30
				bind:value={price}
			/>
			<select
				class='select select-bordered join-item'
				w-30
				bind:value={unit}
			>
				{#each CURRENCIES as unit (unit)}
					<option value={unit}>{unit}</option>
				{/each}
			</select>
		</div>

		<div i-material-symbols-equal rotate='90 sm:(180)' />

		<div class='join'>
			<p class='join-item' decoration-sky-500 text-2xl text-bold underline>
				{(toJpy(price, unit) / hhkb.info.priceJpy).toFixed(2)} HHKBs
			</p>
		</div>
	</div>
</div>
