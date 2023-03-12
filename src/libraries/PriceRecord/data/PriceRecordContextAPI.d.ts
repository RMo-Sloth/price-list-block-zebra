import { PriceRecord } from "./priceRecord";

export interface PriceRecordsContextAPI {
	/** The state supplied by the Context */
	records: PriceRecord[];
	
	/** Add a new record to the records stored in this Context. */
	add: (record: PriceRecord) => void;
	
	/** Replace a record in the records stored in this Context. */
	update: (record: PriceRecord) => void;
	
	/** Remove a record from the records stored in this Context. */
	remove: (record: PriceRecord) => void;
	
	/** Move down a record inside the records array stored in this Context. */
	move_down: (record: PriceRecord) => void;
	
	/** Move up a record inside the records array stored in this Context. */
	move_up: (record: PriceRecord) => void;
}
