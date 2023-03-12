import { createContext, useEffect, useState } from '@wordpress/element';
import { PriceRecordsFunctions } from './PriceRecordsFunctions';
import { PriceRecord } from "./PriceRecord";
import { PriceRecordContextAPI } from './PriceRecordContextAPI';

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
	const context: PriceRecordContextAPI = { records, add, update, remove, move_down, move_up };

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

	return <PriceRecordContext.Provider value={ context } > {props.children} </PriceRecordContext.Provider>;
}
