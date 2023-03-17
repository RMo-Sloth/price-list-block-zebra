import { BlockSettingsRecord } from "./BlockSettingsRecord";


export class BlockSettingsFunction {

	static default(): BlockSettingsRecord {
		const record = {
			add: true,
			delete: false,
			edit_description: true,
			order_items: false,
			edit_price: true
		}

		return Object.seal( record );
	}

	static toggleSetting(
		record: BlockSettingsRecord,
		setting: 'add' | 'delete' | 'edit_description' | 'edit_price' | 'order_items') {
		const result =  {
			...record,
			[setting]: !record[setting]
		};

		return Object.seal( result );
	}

}
