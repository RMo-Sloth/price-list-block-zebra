export interface SettingsRecord {
	/** Enables adding new products */
	add: boolean;

	/** Enables removing new products */
	delete: boolean;

	/** Enables editing of the product descriptiion */
	edit_description: boolean;

	/** Enables editing of the product price */
	edit_price: boolean;

	/** Enables changing the order in which the products appear */
	order_items: boolean;
}