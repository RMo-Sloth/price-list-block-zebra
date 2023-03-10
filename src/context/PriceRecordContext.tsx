import { createContext, useEffect, useState } from '@wordpress/element';
import { PriceRecordManager } from '../records/priceRecord/priceRecord';

const PriceRecordContext = createContext( {
	records: [],
	add: ( record ) => {},
	update: ( record ) => {},
	remove: ( record ) => {},
	move_down: ( movingRecord ) => {},
	move_up: ( movingRecord ) => {},
	on_save: () => {},
} );
export default PriceRecordContext;

export function PriceRecordContextProvider( props ): JSX.Element {
	const [ records, setRecords ] = useState( [ ...props.records ] );

	useEffect( () => {
		props.on_save( [ ...records ] );
	}, [ records ] );

	function add( record ) {
		const new_records = PriceRecordManager.add( records, record );
		setRecords( new_records );
	}

	function update( updatedRecord ) {
		const new_records = PriceRecordManager.update( records, updatedRecord )
		setRecords( new_records );
	}

	function remove( removedRecord ) {
		const new_records = PriceRecordManager.remove( records, removedRecord );
		setRecords( new_records );
	}

	function moveDown( record ) {
		const new_records = PriceRecordManager.moveDown( records, record )
		setRecords( new_records );
	}

	function moveUp( record ) {
		const new_records = PriceRecordManager.moveUp( records, record )
		setRecords( new_records );
	}

	return <PriceRecordContext.Provider
			value={ {
				records,
				add,
				update,
				remove,
				move_down: moveDown,
				move_up: moveUp,
				on_save: undefined
			} }
		>
			{ props.children }
		</PriceRecordContext.Provider>;
}
