import type { Tagged } from 'type-fest';

export type Millimeters = Tagged<number, 'Millimeters'>;
export type Centimeters = Tagged<number, 'Centimeters'>;
export type Inches = Tagged<number, 'Inches'>;
export type Meter = Tagged<number, 'Meter'>;
export type Kilometers = Tagged<number, 'Kilometers'>;
export type Miles = Tagged<number, 'Miles'>;
export type Grams = Tagged<number, 'Grams'>;
export type Kilograms = Tagged<number, 'Kilograms'>;
export type Pounds = Tagged<number, 'Pounds'>;
export type	JPY = Tagged<number, 'Yen'>;

export type Length = Millimeters | Centimeters | Inches | Meter | Kilometers | Miles;
export type Mass = Grams | Kilograms | Pounds;
export type Currency = JPY;

export const LENGTH_UNITS = [
	'mm',
	'cm',
	'm',
	'km',
	'inch',
	'mile',
] as const;

export type LengthUnit = typeof LENGTH_UNITS[number];

export const MASS_UNITS = [
	'g',
	'kg',
	'pound',
] as const;

export type MassUnit = typeof MASS_UNITS[number];

export const CURRENCIES = [
	'JPY',
] as const;

export type CurrencyUnit = typeof CURRENCIES[number];

export function milesToMillimeters(miles: Miles): Millimeters {
	return miles * 1609344 as Millimeters;
}

export function kilometersToMillimeters(kilometers: Kilometers): Millimeters {
	return kilometers * 1000000 as Millimeters;
}

export function metersToMillimeters(meters: Meter): Millimeters {
	return meters * 1e3 as Millimeters;
}

export function centimetersToMillimeters(centimeters: Centimeters): Millimeters {
	return centimeters * 10 as Millimeters;
}

export function inchesToMillimeters(inches: Inches): Millimeters {
	return inches * 25.4 as Millimeters;
}

export function kilogramToGrams(kilograms: Kilograms): Grams {
	return kilograms * 1000 as Grams;
}

export function poundsToGrams(pounds: Pounds): Grams {
	return pounds * 453.592 as Grams;
}

export function toMillimeters(length: Length, unit: LengthUnit): Millimeters {
	switch (unit) {
		case 'mm':
			return length as Millimeters;
		case 'cm':
			return centimetersToMillimeters(length as Centimeters);
		case 'm':
			return metersToMillimeters(length as Meter);
		case 'km':
			return kilometersToMillimeters(length as Kilometers);
		case 'inch':
			return inchesToMillimeters(length as Inches);
		case 'mile':
			return milesToMillimeters(length as Miles);
		default:
			unit satisfies never;
			throw new Error(`Unknown unit: ${unit as string}`);
	}
}

export function toGrams(mass: Mass, unit: MassUnit): Grams {
	switch (unit) {
		case 'g':
			return mass as Grams;
		case 'kg':
			return kilogramToGrams(mass as Kilograms);
		case 'pound':
			return poundsToGrams(mass as Pounds);
		default:
			unit satisfies never;
			throw new Error(`Unknown unit: ${unit as string}`);
	}
}

export function toJpy(price: JPY, unit: CurrencyUnit): JPY {
	switch (unit) {
		case 'JPY':
			return price;
		default:
			unit satisfies never;
			throw new Error(`Unknown currency: ${unit as string}`);
	}
}
