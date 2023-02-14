import { createContext, useEffect, useState } from '@wordpress/element';

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
		const enhancedRecord = { ...record, id: latestId() + 1 };
		setRecords( [ ...records, enhancedRecord ] );
	}

	function update( updatedRecord ) {
		const priceRecords = [ ...records ];
		const index = priceRecords.findIndex(
			( record ) => record.id === updatedRecord.id
		);
		priceRecords[ index ] = updatedRecord;
		setRecords( priceRecords );
	}

	function remove( removedRecord ) {
		const priceRecords = records.filter(
			( record ) => record.id !== removedRecord.id
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

	function latestId() {
		return records.reduce(
			( prev, current ) => Math.max( prev, current.id ),
			0
		);
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
