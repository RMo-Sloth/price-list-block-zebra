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
		const new_records = [...records];
		if (index >= 0)
			new_records.splice(index, 1, updated_record);

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
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		const new_records = PriceRecordCollectionFunctions.swapPlaces(records, index, index + 1);
		return Object.freeze(new_records);
	}

	static moveUp(records: PriceRecordCollection, record: PriceRecord): PriceRecordCollection {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		const new_records = PriceRecordCollectionFunctions.swapPlaces(records, index, index - 1);
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

	private static swapPlaces(records: PriceRecordCollection, index1: number, index2: number): PriceRecord[] {
		const priceRecords = [...records];
		const record1 = priceRecords[index1];
		const record2 = priceRecords[index2];

		priceRecords[index1] = record2;
		priceRecords[index2] = record1;

		return priceRecords;
	}
}