import { PriceRecord } from "./PriceRecord";

export class PriceRecordFunctions {

	static default(): PriceRecord {
		const result = { name: '', price: 0, index: null };
		return Object.seal(result);
	}

	static update_name(record: PriceRecord, name: string): PriceRecord {
		const result = { ...record, name };
		return Object.seal(result)
	}

}