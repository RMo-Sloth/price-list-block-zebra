import { PriceRecord } from "./PriceRecord";

export class PriceRecordFunctions {

	static default(): PriceRecord {
		const result = { name: '', price: 0, index: null };
		return Object.freeze(result);
	}

	static set_name(record: PriceRecord, name: string): PriceRecord {
		const result = { ...record, name };
		return Object.freeze(result)
	}

	static set_price( record: PriceRecord, price: number ): PriceRecord {
		price = price < 0 ? 0: price;
		price = price % 0.01 > 0 ? Math.floor(price*100) / 100 : price;

		const result = { ...record, price };
		return Object.freeze( result );
	}

	static set_index(record: PriceRecord, index: number) {
		const result = { ...record, index };
		return Object.freeze( result );
	}

}