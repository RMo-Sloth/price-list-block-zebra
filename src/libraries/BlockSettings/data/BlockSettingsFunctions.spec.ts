import { BlockSettingsFunctions } from "./BlockSettingsFunctions";

describe('BlockSettingsFunctions', () => {


	describe('.default() ', () => {

		test('returns expected default values', () => {
			const expected_values = {
				add: true,
				delete: false,
				edit_description: true,
				order_items: false,
				edit_price: true
			};
			const default_record = BlockSettingsFunctions.default();
			expect(default_record).toEqual(expected_values)
		});
		
		test('returns an immutable object', () => {
			const default_record = BlockSettingsFunctions.default();
			expect(Object.isFrozen(default_record)).toBe(true);
		});
	});


	describe('.toggleSetting() ', () => {
		
		test('toggles add', () => {
			const default_record =  BlockSettingsFunctions.default();
			const toggled_once = BlockSettingsFunctions.toggleSetting( default_record, 'add' );
			const toggled_twice = BlockSettingsFunctions.toggleSetting( toggled_once, 'add' );

			expect( toggled_once.add ).toBe( false );
			expect( toggled_twice.add ).toBe( true );
		});

		test('toggles delete', () => {
			const default_record =  BlockSettingsFunctions.default();
			const toggled_once = BlockSettingsFunctions.toggleSetting( default_record, 'delete' );
			const toggled_twice = BlockSettingsFunctions.toggleSetting( toggled_once, 'delete' );

			expect( toggled_once.delete ).toBe( true );
			expect( toggled_twice.delete ).toBe( false );
		});

		// assumed other props ( edit_description, order_items, edit_price ) to update properly as well, because of the generic implementation

		test('returns an immutable object', () => {
			const default_record = BlockSettingsFunctions.default();
			const updated_record = BlockSettingsFunctions.toggleSetting( default_record, 'delete' )
			expect(Object.isFrozen(updated_record)).toBe(true);
		});

		test('returns a new object', () => {
			const default_record = BlockSettingsFunctions.default();
			const updated_record = BlockSettingsFunctions.toggleSetting( default_record, 'delete' )
			expect( Object.is( default_record, updated_record ) ).toBe( false );
		});


	});
});