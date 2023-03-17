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
		settings: BlockSettingsRecord,
		setting: 'add' | 'delete' | 'edit_description' | 'edit_price' | 'order_items') {
		return {
			...settings,
			[setting]: !settings[setting]
		};
	}

}
