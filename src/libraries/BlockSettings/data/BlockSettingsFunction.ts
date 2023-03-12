import { BlockSettingsRecord } from "./settingsRecord";


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
