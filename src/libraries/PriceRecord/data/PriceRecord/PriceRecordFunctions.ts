import { PriceRecord } from "./PriceRecord";

export class PriceRecordFunctions {

	static default(): PriceRecord {
		const result = { name: '', price: 0, index: null };
		return Object.seal(result);
	}

}