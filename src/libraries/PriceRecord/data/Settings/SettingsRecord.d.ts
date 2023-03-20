export interface SettingsRecord {
	/** Enables adding new products */
	readonly add: boolean;

	/** Enables removing new products */
	readonly delete: boolean;

	/** Enables editing of the product descriptiion */
	readonly edit_description: boolean;

	/** Enables editing of the product price */
	readonly edit_price: boolean;

	/** Enables changing the order in which the products appear */
	readonly order_items: boolean;
}