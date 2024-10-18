import type {
	Grams,
	Millimeters,
} from './units';

export const HHKBs = {
	'HHKB Hybrid Type-S': {
		width: 294 as Millimeters,
		depth: 120 as Millimeters,
		height: 40 as Millimeters,
		weight: 540 as Grams,
	},

	'HHKB Studio': {
		width: 308 as Millimeters,
		depth: 132 as Millimeters,
		height: 41 as Millimeters,
		weight: 840 as Grams,
	},
} as const;
