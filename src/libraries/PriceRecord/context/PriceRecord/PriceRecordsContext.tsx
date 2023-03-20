import { createContext, useEffect, useState } from '@wordpress/element';
import { PriceRecordCollectionFunctions } from '../../data/PriceRecordCollection/PriceRecordCollectionFunctions';
import { PriceRecord } from "../../data/PriceRecord/PriceRecord";
import { PriceRecordsContextAPI } from './PriceRecordsContextAPI';
import { PriceRecordCollection } from '../../data/PriceRecordCollection/PriceRecordCollection';

const PriceRecordsContext = createContext<PriceRecordsContextAPI>({
	records: [],
	add: record => { console.warn('This is an useless fallback implementation. Did you provide a Context.Provider?') },
	update: record => { console.warn('This is an useless fallback implementation. Did you provide a Context.Provider?') },
	remove: record => { console.warn('This is an useless fallback implementation. Did you provide a Context.Provider?') },
	move_down: record => { console.warn('This is an useless fallback implementation. Did you provide a Context.Provider?') },
	move_up: record => { console.warn('This is an useless fallback implementation. Did you provide a Context.Provider?') },
});
export default PriceRecordsContext;


type Props = {
	children: JSX.Element,
	records: PriceRecordCollection,
	on_update: (records: PriceRecordCollection) => void
}

export function PriceRecordContextProvider(props: Props): JSX.Element {

	const [records, setRecords] = useState(props.records);
	const context: PriceRecordsContextAPI = { records, add, update, remove, move_down, move_up };

	useEffect(() => {
		props.on_update(records);
	}, [records]);

	function add(record: PriceRecord): void {
		const new_records = PriceRecordCollectionFunctions.add(records, record);
		setRecords(new_records);
	}

	function update(record: PriceRecord): void {
		const new_records = PriceRecordCollectionFunctions.update(records, record)
		setRecords(new_records);
	}

	function remove(record: PriceRecord): void {
		const new_records = PriceRecordCollectionFunctions.remove(records, record);
		setRecords(new_records);
	}

	function move_down(record: PriceRecord): void {
		const new_records = PriceRecordCollectionFunctions.moveDown(records, record)
		setRecords(new_records);
	}

	function move_up(record: PriceRecord): void {
		const new_records = PriceRecordCollectionFunctions.moveUp(records, record)
		setRecords(new_records);
	}

	return <PriceRecordsContext.Provider value={context} >{props.children}</PriceRecordsContext.Provider>;
}
