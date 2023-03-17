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


})