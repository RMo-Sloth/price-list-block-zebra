import { createContext, useEffect, useState } from '@wordpress/element';
import { PriceRecordManager } from '../records/priceRecord/priceRecord';

const PriceRecordContext = createContext( {
	records: [],
	add: ( record ) => {},
	update: ( record ) => {},
	remove: ( record ) => {},
	move_down: ( movingRecord ) => {},
	move_up: ( movingRecord ) => {},
	is_first: ( record ) => {},
	is_last: ( record ) => {},
	on_save: () => {},
} );
export default PriceRecordContext;

export function PriceRecordContextProvider( props ) {
	const [ records, setRecords ] = useState( [ ...props.records ] );

	useEffect( () => {
		props.on_save( [ ...records ] );
	}, [ records ] );

	function add( record ) {
		const new_records = PriceRecordManager.add( records, record );
		setRecords( new_records );
	}

	function update( updatedRecord ) {
		const priceRecords = PriceRecordManager.update( records, updatedRecord )
		setRecords( priceRecords );
	}

	function remove( removedRecord ) {
		const priceRecords = records.filter(
			( record ) => record.index !== removedRecord.index
		);
		setRecords( priceRecords );
	}

	function moveDown( movingRecord ) {
		const index = indexOf( movingRecord );
		swapPlaces( index, index + 1 );
	}

	function moveUp( movingRecord ) {
		const index = indexOf( movingRecord );
		swapPlaces( index, index - 1 );
	}

	function isFirst( record ) {
		return indexOf( record ) === 0;
	}

	function isLast( record ) {
		return indexOf( record ) + 1 === records.length;
	}

	function indexOf( targetRecord ) {
		return records.findIndex(
			( comparedRecord ) => comparedRecord === targetRecord
		);
	}

	function swapPlaces( index1, index2 ) {
		const priceRecords = [ ...records ];
		const record1 = priceRecords[ index1 ];
		const record2 = priceRecords[ index2 ];

		priceRecords[ index1 ] = record2;
		priceRecords[ index2 ] = record1;

		setRecords( priceRecords );
	}

	return (
		<PriceRecordContext.Provider
			value={ {
				records,
				add,
				update,
				remove,
				move_down: moveDown,
				move_up: moveUp,
				is_first: isFirst,
				is_last: isLast,
			} }
		>
			{ props.children }
		</PriceRecordContext.Provider>
	);
}
