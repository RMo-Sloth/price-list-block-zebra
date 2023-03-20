export interface PriceRecord {
	/** The name of the product */
	readonly name: string;
	
	/** The price of the product */
	readonly price: number;
	
	/** An unique record identifier */
	readonly index: number;
}