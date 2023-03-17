import { PriceRecordFunctions } from "./PriceRecordFunctions";

describe('PriceRecordFunctions', () => {


	describe('.default() ', () => {

		test('returns the expected values', () => {
			const expected_record = { name: '', price: 0, index: null };
			expect(PriceRecordFunctions.default()).toStrictEqual(expected_record);
		});

		test('returns an immutable object', () => {
			const record = PriceRecordFunctions.default();
			expect(Object.isSealed(record)).toBe(true);
		});

	});


	describe('.set_name( record, name ) ', () => {

		test('sets a new name', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_name(default_record, 'I am a fictional name');
			expect(new_record.name).toBe('I am a fictional name');
		});

		test('returns an immutable object', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_name(default_record, 'I am a fictional name');
			expect(Object.isSealed(new_record)).toBe(true);
		});

		test('returns a newly created object reference', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_name(default_record, 'I am a fictional name');
			expect(Object.is(default_record, new_record)).toBe(false);
		});

	});


	describe('.set_price ', () => {

		test('sets a new price', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_price(default_record, 12.35);
			expect(new_record.price).toBe(12.35);
		});

		test('does not allow prices below 0', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_price(default_record, -12.35);
			expect(new_record.price).toBe(0);
		});

		test('allows for 2 digits', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_price(default_record, 512.189);
			expect(new_record.price).toBe(512.18);
		});

		test('returns an immutable object', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_price(default_record, 12);
			expect(Object.isSealed(new_record)).toBe(true);
		});

		test('returns a newly created object reference', () => {
			const default_record = PriceRecordFunctions.default();
			const new_record = PriceRecordFunctions.set_price(default_record, 10);
			expect(Object.is(default_record, new_record)).toBe(false);
		});

	});


})