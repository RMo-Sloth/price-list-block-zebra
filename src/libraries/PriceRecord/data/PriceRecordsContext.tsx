import { createContext, useEffect, useState } from '@wordpress/element';
import { PriceRecordsFunctions } from './PriceRecordsFunctions';
import { PriceRecord } from "./priceRecord";
import { PriceRecordContextAPI } from './PriceRecordContextAPI';

const PriceRecordsContext = createContext<PriceRecordContextAPI>({
	records: [],
	add: record => { console.warn( 'This is an useless fallback implementation. Did you provide a Context.Provider?' ) },
	update: record => { console.warn( 'This is an useless fallback implementation. Did you provide a Context.Provider?' ) },
	remove: record => { console.warn( 'This is an useless fallback implementation. Did you provide a Context.Provider?' ) },
	move_down: record => { console.warn( 'This is an useless fallback implementation. Did you provide a Context.Provider?' ) },
	move_up: record => { console.warn( 'This is an useless fallback implementation. Did you provide a Context.Provider?' ) },
});
export default PriceRecordsContext;


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

	return <PriceRecordsContext.Provider value={ context } > {props.children} </PriceRecordsContext.Provider>;
}
