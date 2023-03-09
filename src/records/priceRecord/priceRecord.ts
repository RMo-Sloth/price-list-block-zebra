interface PriceRecord {
	name: string;
	price: number;
	index: number;
}

export class PriceRecordManager {
	static add( records: PriceRecord[], record: PriceRecord ): PriceRecord[] {
		const enhancedRecord = { ...record, index: PriceRecordManager.latestId( records ) + 1 };
		return [ ...records, enhancedRecord ];
	}

	static update( records: PriceRecord[], updated_record: PriceRecord ): PriceRecord[] {
		const new_records = [ ...records ];
		const index = records.findIndex(
			( record ) => record.index === updated_record.index
		);
		new_records[ index ] = updated_record;
		return new_records;
	}

	static remove( records: PriceRecord[], removed_record: PriceRecord ) {
		return records.filter(
			( record ) => record.index !== removed_record.index
		);
	}

	private static latestId( records: PriceRecord[] ) {
		return records.reduce(
			( prev, current ) => Math.max( prev, current.index ),
			0
		);
	}
}