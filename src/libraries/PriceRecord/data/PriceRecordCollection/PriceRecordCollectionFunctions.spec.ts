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
			expect(PriceRecordCollectionFunctions.isFirst(records, records[0])).toBe(true);
		});

		test('returns false when another record is provided', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			expect(PriceRecordCollectionFunctions.isFirst(records, records[1])).toBe(false);
		});

	});


	describe('.isLast(records, record) ', () => {

		test('returns true when the last record is provided', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			expect(PriceRecordCollectionFunctions.isLast(records, records[1])).toBe(true);
		});

		test('returns false when another record is provided', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			expect(PriceRecordCollectionFunctions.isLast(records, records[0])).toBe(false);
		});

	});


	describe('.remove(records, record) ', () => {

		test('removed a record', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const record = records[1];
			records = PriceRecordCollectionFunctions.remove(records, record);
			expect(records.length).toBe(1);
			expect(Object.is(record, records[0])).toBe(false);
		});

		test('returns a new collection', () => {
			const collection = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			const collection_2 = PriceRecordCollectionFunctions.remove(collection, collection[0]);
			expect(Object.is(collection, collection_2)).toBe(false);
		});

		test('returns a frozen collection', () => {
			let collection = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			collection = PriceRecordCollectionFunctions.remove(collection, collection[0]);
			expect(Object.isFrozen(collection)).toBe(true);
		});

	});

	describe('.moveDown(records, record) ', () => {

		test('moves a record to a higher index position', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveDown(records, records[1]);
			expect(Object.is(new_records[2], records[1]));
			expect(Object.is(new_records[1], records[2]));
		});

		test('keeps a record in the last position', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveDown(records, records[0]);
			expect(Object.is(new_records[1], records[1]));
		});

		test('returns a new collection', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveDown(records, records[0]);

			expect(Object.is(records, new_records)).toBe(false);
		});


		test('returns a frozen collection', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveDown(records, records[0]);
			expect(Object.isFrozen(new_records)).toBe(true);
		});

	});

	describe('.moveUp(records, record) ', () => {

		test('moves a record to a lower index position', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveUp(records, records[2]);
			expect(Object.is(new_records[1], records[2]));
			expect(Object.is(new_records[2], records[1]));
		});

		test('keeps a record in the first position', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveUp(records, records[0]);
			expect(Object.is(new_records[0], records[0]));
		});

		test('returns a new collection', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveUp(records, records[0]);

			expect(Object.is(records, new_records)).toBe(false);
		});


		test('returns a frozen collection', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_records = PriceRecordCollectionFunctions.moveUp(records, records[0]);
			expect(Object.isFrozen(new_records)).toBe(true);
		});

	});

	describe('nextRecord(records, record) ', () => {

		test('returns a reference to the next record', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());

			const new_record = PriceRecordCollectionFunctions.nextRecord(records, records[1]);
			expect(Object.is(new_record, records[2])).toBe(true);

			const new_record_2 = PriceRecordCollectionFunctions.nextRecord(records, records[0]);
			expect(Object.is(new_record_2, records[1])).toBe(true);
		});

		test('returns undefined for the last record', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());

			const new_record = PriceRecordCollectionFunctions.nextRecord(records, records[1]);
			expect( new_record ).toBe( undefined );
		});

	});


	describe('previousRecord(records, record) ', () => {

		test('returns a reference to the previous record', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());

			const new_record = PriceRecordCollectionFunctions.previousRecord(records, records[2]);
			expect(Object.is(new_record, records[1])).toBe(true);

			const new_record_2 = PriceRecordCollectionFunctions.previousRecord(records, records[1]);
			expect(Object.is(new_record_2, records[0])).toBe(true);
		});

		test('returns undefined for the first record', () => {
			let records = PriceRecordCollectionFunctions.add([], PriceRecordFunctions.default());
			records = PriceRecordCollectionFunctions.add(records, PriceRecordFunctions.default());
			const new_record = PriceRecordCollectionFunctions.previousRecord(records, records[0]);
			expect( new_record ).toBe( undefined );
		});

	});


});

		// test('', () => {

		// });