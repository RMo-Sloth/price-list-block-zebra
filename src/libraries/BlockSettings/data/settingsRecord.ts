export interface SettingsRecord {
	add: boolean;
	delete: boolean;
	edit_description: boolean;
	edit_price: boolean;
	order_items: boolean;
}

export class SettingsManager {
	static toggleSetting( 
		settings: SettingsRecord, 
		setting: 'add' | 'delete' | 'edit_description' | 'edit_price' | 'order_items' ) {
		return {
			...settings,
			[setting]: ! settings[setting],
		};
	}
}
