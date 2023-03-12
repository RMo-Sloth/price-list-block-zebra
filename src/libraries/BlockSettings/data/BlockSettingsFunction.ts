import { SettingsRecord } from "./settingsRecord";


export class BlockSettingsFunction {
	static toggleSetting(
		settings: SettingsRecord,
		setting: 'add' | 'delete' | 'edit_description' | 'edit_price' | 'order_items') {
		return {
			...settings,
			[setting]: !settings[setting]
		};
	}
}
