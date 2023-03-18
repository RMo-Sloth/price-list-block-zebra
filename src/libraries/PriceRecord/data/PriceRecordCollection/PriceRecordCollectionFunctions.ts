import { PriceRecord } from "../PriceRecord/PriceRecord";
import { PriceRecordFunctions } from "../PriceRecord/PriceRecordFunctions";

export class PriceRecordCollectionFunctions {
	static add(records: readonly PriceRecord[], record: PriceRecord): readonly PriceRecord[] {
		const index = PriceRecordCollectionFunctions.latestId(records) + 1;
		const new_record = PriceRecordFunctions.set_index(record, index);
		return Object.freeze([...records, new_record]);
	}

	static update(records: readonly PriceRecord[], updated_record: PriceRecord): readonly PriceRecord[] {
		const index = PriceRecordCollectionFunctions.indexOf(records, updated_record);
		const new_records = [...records];
		if (index >= 0)
			new_records.splice(index, 1, updated_record);

		return Object.freeze(new_records);
	}

	static isFirst(records: readonly PriceRecord[], record: PriceRecord): boolean {
		return PriceRecordCollectionFunctions.indexOf(records, record) === 0;
	}

	static isLast(records: readonly PriceRecord[], record: PriceRecord): boolean {
		return PriceRecordCollectionFunctions.indexOf(records, record) + 1 === records.length;
	}

	static remove(records: readonly PriceRecord[], record: PriceRecord): readonly PriceRecord[] {
		const new_records = records.filter(({ index }) => index !== record.index);
		return Object.freeze(new_records);
	}

	static moveDown(records: readonly PriceRecord[], record: PriceRecord): readonly PriceRecord[] {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		const new_records = PriceRecordCollectionFunctions.swapPlaces(records, index, index + 1);
		return Object.freeze(new_records);
	}

	static moveUp(records: readonly PriceRecord[], record: PriceRecord): readonly PriceRecord[] {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		const new_records = PriceRecordCollectionFunctions.swapPlaces(records, index, index - 1);
		return Object.freeze(new_records);
	}

	static nextRecord(records: readonly PriceRecord[], record: PriceRecord): PriceRecord | undefined {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return records[index + 1];
	}

	static previousRecord(records: readonly PriceRecord[], record: PriceRecord): PriceRecord | undefined {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return records[index - 1];
	}

	private static indexOf(records: readonly PriceRecord[], record: PriceRecord): number {
		return records.findIndex(({ index }) => index === record.index);
	}

	private static latestId(records: readonly PriceRecord[]) {
		return records.reduce((prev, current) => Math.max(prev, current.index), 0);
	}

	private static swapPlaces(records: readonly PriceRecord[], index1: number, index2: number): PriceRecord[] {
		const priceRecords = [...records];
		const record1 = priceRecords[index1];
		const record2 = priceRecords[index2];

		priceRecords[index1] = record2;
		priceRecords[index2] = record1;

		return priceRecords;
	}
}