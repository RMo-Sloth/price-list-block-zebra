import { PriceRecord } from "../PriceRecord/PriceRecord";
import { PriceRecordFunctions } from "../PriceRecord/PriceRecordFunctions";
import { PriceRecordCollectionFunctions } from "./PriceRecordCollectionFunctions";

describe('PriceRecordCollectionFunctions', () => {


	describe('.add(records, record) ', () => {

		test('adds a record to the array', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const collection = PriceRecordCollectionFunctions.add([], record);
			expect(collection.length).toBe(1);
		});

		test('adds multiple records to the array', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const record_2: PriceRecord = PriceRecordFunctions.default();
			let collection = PriceRecordCollectionFunctions.add([], record);
			collection = PriceRecordCollectionFunctions.add(collection, record_2);
			expect(collection.length).toBe(2);
		});

		test('sets indexes of records', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const record_2: PriceRecord = PriceRecordFunctions.default();
			let collection = PriceRecordCollectionFunctions.add([], record);
			collection = PriceRecordCollectionFunctions.add(collection, record_2);
			expect(collection[0].index).toBe(1);
			expect(collection[1].index).toBe(2);
		});

		test('returns a new collection', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const collection = [];
			const collection_2 = PriceRecordCollectionFunctions.add(collection, record);
			expect(Object.is(collection, collection_2)).toBe(false);
		});

		test('returns a frozen collection', () => {
			const record: PriceRecord = PriceRecordFunctions.default();
			const collection = PriceRecordCollectionFunctions.add([], record);
			expect(Object.isFrozen(collection)).toBe(true);
		});

	});


	describe('.update(records, record) ', () => {

		test('replaces an existing record', () => {
			let record = PriceRecordFunctions.default();
			record = PriceRecordFunctions.set_price(record, 12);
			record = PriceRecordFunctions.set_index(record, 1);
			let collection = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			collection = PriceRecordCollectionFunctions.update(collection, record);
			expect(Object.is(record, collection[0])).toBe(true);
		});

		test('does not replace or insert a non-existand existing record', () => {
			let record = PriceRecordFunctions.default();
			record = PriceRecordFunctions.set_price(record, 12);
			record = PriceRecordFunctions.set_index(record, 2);
			let collection = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			collection = PriceRecordCollectionFunctions.update(collection, record);
			expect(Object.is(record, collection[0])).toBe(false);
			expect(collection.length).toBe(1);
		});

		test('returns a new collection', () => {
			const collection = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			const collection_2 = PriceRecordCollectionFunctions.update(collection, PriceRecordFunctions.default());
			expect(Object.is(collection, collection_2)).toBe(false);
		});

		test('returns a frozen collection', () => {
			let collection = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			collection = PriceRecordCollectionFunctions.update(collection, PriceRecordFunctions.default());
			expect(Object.isFrozen(collection)).toBe(true);
		});

	});


	describe('.isFirst(records, record) ', () => {

		test('returns true when first record is provided', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			expect( PriceRecordCollectionFunctions.isFirst( records, records[0] ) ).toBe(true);
		});

		test('returns false when another record is provided', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			expect( PriceRecordCollectionFunctions.isFirst( records, records[1] ) ).toBe(false);
		});

	});

});