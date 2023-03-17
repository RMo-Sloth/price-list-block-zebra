import { BlockSettingsFunction } from "./BlockSettingsFunction";

describe('BlockSettingsFunction.default() ', () => {

	test('returns expected default values', () => {
		const expected_values = {
			add: true,
			delete: false,
			edit_description: true,
			order_items: false,
			edit_price: true
		};
		const default_record = BlockSettingsFunction.default();
		expect(default_record).toEqual(expected_values)
	});
	
	test('returns an immutable object', () => {
		const default_record = BlockSettingsFunction.default();
		expect(Object.isSealed(default_record)).toBe(true);
	});

});