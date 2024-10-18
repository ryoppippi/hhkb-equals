import type { StringKeyOf } from 'type-fest';
import { HHKBs } from './hhkb';

class HHKB {
	#currentHHKB: StringKeyOf<typeof HHKBs> = $state('HHKB Hybrid Type-S');

	get info() {
		return HHKBs[this.#currentHHKB];
	}

	get name() {
		return this.#currentHHKB;
	}

	set name(name: StringKeyOf<typeof HHKBs>) {
		this.#currentHHKB = name;
	}
}

export const hhkb = new HHKB();
