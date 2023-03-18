import { PriceRecord } from "../PriceRecord/PriceRecord";
import { PriceRecordFunctions } from "../PriceRecord/PriceRecordFunctions";
import { PriceRecordCollectionFunctions } from "./PriceRecordCollectionFunctions";

describe( 'PriceRecordCollectionFunctions', () => {


	describe('.add() ', () => {
		
		test('adds a record to the array', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const collection = PriceRecordCollectionFunctions.add([], record);
			expect( collection.length ).toBe( 1 );
		});

		test('adds multiple records to the array', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const record_2: PriceRecord = PriceRecordFunctions.default();
			let collection = PriceRecordCollectionFunctions.add([], record);
				collection = PriceRecordCollectionFunctions.add(collection, record_2);
			expect( collection.length ).toBe( 2 );
		});

		test('sets indexes of records', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const record_2: PriceRecord = PriceRecordFunctions.default();
			let collection = PriceRecordCollectionFunctions.add([], record);
				collection = PriceRecordCollectionFunctions.add(collection, record_2);
			expect( collection[0].index ).toBe( 1 );
			expect( collection[1].index ).toBe( 2 );
		});

		test('returns a new collection', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const collection = [];
			const collection_2 = PriceRecordCollectionFunctions.add(collection, record);
			expect( Object.is( collection, collection_2 ) ).toBe( false);
		});

		test('returns a frozen collection', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const collection = PriceRecordCollectionFunctions.add([], record);
			expect( Object.isFrozen( collection ) ).toBe( true );
		});

	});


	describe('', () => {

	});

});