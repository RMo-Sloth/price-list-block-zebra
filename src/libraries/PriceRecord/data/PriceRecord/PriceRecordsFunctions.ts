import { PriceRecord } from "./PriceRecord";

export class PriceRecordCollectionFunctions {
	static add(records: PriceRecord[], record: PriceRecord): PriceRecord[] {
		const enhancedRecord = { ...record, index: PriceRecordCollectionFunctions.latestId(records) + 1 };
		return [...records, enhancedRecord];
	}

	static update(records: PriceRecord[], updated_record: PriceRecord): PriceRecord[] {
		const new_records = [...records];
		const index = records.findIndex(
			(record) => record.index === updated_record.index
		);
		new_records[index] = updated_record;
		return new_records;
	}

	static isFirst(records: PriceRecord[], record: PriceRecord): boolean {
		return PriceRecordCollectionFunctions.indexOf(records, record) === 0;
	}

	static isLast(records: PriceRecord[], record: PriceRecord): boolean {
		return PriceRecordCollectionFunctions.indexOf(records, record) + 1 === records.length;
	}

	static remove(records: PriceRecord[], removed_record: PriceRecord): PriceRecord[] {
		return records.filter(
			(record) => record.index !== removed_record.index
		);
	}

	static moveDown(records: PriceRecord[], record: PriceRecord): PriceRecord[] {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return PriceRecordCollectionFunctions.swapPlaces(records, index, index + 1);
	}

	static moveUp(records: PriceRecord[], record: PriceRecord): PriceRecord[] {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return PriceRecordCollectionFunctions.swapPlaces(records, index, index - 1);
	}

	static nextRecord(records: PriceRecord[], record: PriceRecord): PriceRecord | undefined {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return records[index + 1];
	}

	static previousRecord(records: PriceRecord[], record: PriceRecord): PriceRecord | undefined {
		const index = PriceRecordCollectionFunctions.indexOf(records, record);
		return records[index - 1];
	}

	private static indexOf(records: PriceRecord[], targetRecord: PriceRecord): number {
		return records.findIndex(
			(comparedRecord) => comparedRecord === targetRecord
		);
	}

	private static latestId(records: PriceRecord[]) {
		return records.reduce(
			(prev, current) => Math.max(prev, current.index),
			0
		);
	}

	private static swapPlaces(records: PriceRecord[], index1: number, index2: number): PriceRecord[] {
		const priceRecords = [...records];
		const record1 = priceRecords[index1];
		const record2 = priceRecords[index2];

		priceRecords[index1] = record2;
		priceRecords[index2] = record1;

		return priceRecords;
	}
}