import { createContext, useEffect, useState } from '@wordpress/element';
import { PriceRecordsFunctions } from './PriceRecordsFunctions';
import { PriceRecord } from "./PriceRecord";

interface PriceRecordContextAPI {
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

const PriceRecordContext = createContext<PriceRecordContextAPI>({
	records: [],
	add: (record) => { },
	update: (record) => { },
	remove: (record) => { },
	move_down: (record) => { },
	move_up: (record) => { },
});
export default PriceRecordContext;


type Props = {
	children: JSX.Element,
	records: PriceRecord[],
	on_update: (records: PriceRecord[]) => void
}

export function PriceRecordContextProvider(props: Props): JSX.Element {

	const [records, setRecords] = useState([...props.records]);

	useEffect(() => {
		props.on_update([...records]);
	}, [records]);

	function add(record: PriceRecord): void {
		const new_records = PriceRecordsFunctions.add(records, record);
		setRecords(new_records);
	}

	function update(record: PriceRecord): void {
		const new_records = PriceRecordsFunctions.update(records, record)
		setRecords(new_records);
	}

	function remove(record: PriceRecord): void {
		const new_records = PriceRecordsFunctions.remove(records, record);
		setRecords(new_records);
	}

	function move_down(record: PriceRecord): void {
		const new_records = PriceRecordsFunctions.moveDown(records, record)
		setRecords(new_records);
	}

	function move_up(record: PriceRecord): void {
		const new_records = PriceRecordsFunctions.moveUp(records, record)
		setRecords(new_records);
	}

	return <PriceRecordContext.Provider
		value={{ records, add, update, remove, move_down, move_up }}
	>
		{props.children}
	</PriceRecordContext.Provider>;
}
