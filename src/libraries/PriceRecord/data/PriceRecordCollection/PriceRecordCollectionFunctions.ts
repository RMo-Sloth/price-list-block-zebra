import { PriceRecord } from "../PriceRecord/PriceRecord";
import { PriceRecordFunctions } from "../PriceRecord/PriceRecordFunctions";
import { PriceRecordCollection } from "./PriceRecordCollection";

export class PriceRecordCollectionFunctions {

	static add(records: PriceRecordCollection, record: PriceRecord): PriceRecordCollection {
		const index = PriceRecordCollectionFunctions.latestId(records) + 1;
		const new_record = PriceRecordFunctions.set_index(record, index);
		return Object.freeze([...records, new_record]);
	}

	static update(records: PriceRecordCollection, updated_record: PriceRecord): PriceRecordCollection {
		const index = PriceRecordCollectionFunctions.indexOf(records, updated_record);
		const new_records = PriceRecordCollectionFunctions.replace( records, records[index], updated_record );
		return Object.freeze(new_records);
	}

	static isFirst(records: PriceRecordCollection, record: PriceRecord): boolean {
		return PriceRecordCollectionFunctions.indexOf(records, record) === 0;
	}

	static isLast(records: PriceRecordCollection, record: PriceRecord): boolean {
		return PriceRecordCollectionFunctions.indexOf(records, record) + 1 === records.length;
	}

	static remove(records: PriceRecordCollection, record: PriceRecord): PriceRecordCollection {
		const new_records = records.filter(({ index }) => index !== record.index);
		return Object.freeze(new_records);
	}

	static moveDown(records: PriceRecordCollection, record: PriceRecord): PriceRecordCollection {
		const next_record = PriceRecordCollectionFunctions.nextRecord(records, record);
		const new_records = PriceRecordCollectionFunctions.replace(records, record, next_record);
		return Object.freeze(new_records);
	}

	static moveUp(records: PriceRecordCollection, record: PriceRecord): PriceRecordCollection {
		const previous_record = PriceRecordCollectionFunctions.previousRecord(records, record);
		const new_records = PriceRecordCollectionFunctions.replace(records, record, previous_record);
		return Object.freeze(new_records);
	}

	static nextRecord(records: PriceRecordCollection, record: PriceRecord): PriceRecord | undefined {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return records[index + 1];
	}

	static previousRecord(records: PriceRecordCollection, record: PriceRecord): PriceRecord | undefined {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return records[index - 1];
	}

	private static indexOf(records: PriceRecordCollection, record: PriceRecord): number {
		return records.findIndex(({ index }) => index === record.index);
	}

	private static latestId(records: PriceRecordCollection) {
		return records.reduce((prev, current) => Math.max(prev, current.index), 0);
	}

	/** Replaces records that exists. If one record matches it will be replaced by the other one. When both records match they will switch in the array. When no records match nothing will happen */
	private static replace(records: PriceRecordCollection, record_1: PriceRecord, record_2: PriceRecord): PriceRecordCollection {
		// NOTE: the records are matched by reference, so objects with the same values and different reference won't match.
		return records.map(record => {
			if (Object.is(record, record_1)) return record_2;
			else if (Object.is(record, record_2)) return record_1;
			else return record;
		});
	}
}