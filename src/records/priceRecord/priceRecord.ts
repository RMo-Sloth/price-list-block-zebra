interface PriceRecord {
	name: string;
	price: number;
	index: number;
}

export class PriceRecordManager {
	static add( priceRecords: PriceRecord[], priceRecord: PriceRecord ): PriceRecord[] {
		const enhancedRecord = { ...priceRecord, index: PriceRecordManager.latestId( priceRecords ) + 1 };
		return [ ...priceRecords, enhancedRecord ];
	}
	private static 	latestId( priceRecords: PriceRecord[] ) {
		return priceRecords.reduce(
			( prev, current ) => Math.max( prev, current.index ),
			0
		);
	}
}