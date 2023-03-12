import { BlockSettingsRecord } from "./BlockSettingsRecord";


export class BlockSettingsFunction {
	static toggleSetting(
		settings: BlockSettingsRecord,
		setting: 'add' | 'delete' | 'edit_description' | 'edit_price' | 'order_items') {
		return {
			...settings,
			[setting]: !settings[setting]
		};
	}
}
