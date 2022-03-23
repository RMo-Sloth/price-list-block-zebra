import { createContext, useEffect } from "@wordpress/element";
import { useState } from '@wordpress/element';

const PriceRecordContext = createContext({
    records: [],
    add: ( record ) => {},
    update: ( record ) => {},
    remove: ( record ) => {},
    move_down: ( moving_record ) => {},
    move_up: ( moving_record ) => {},
    is_first: ( record ) => {},
    is_last: ( record ) => {},
    on_save: () => {}
});
export default PriceRecordContext;




export function PriceRecordContextProvider( props ) {
    const [records, set_records] = useState( [...props.records] );

    useEffect( () => {
        set_records( [...props.records] );
    }, [props.records] )

    function add( record ) {
        const enhanced_record = {...record, id: latest_id() + 1};
        props.on_save( [...records, enhanced_record ] );
    }

    function update( updated_record ) {
        const price_records = [ ...records ];
		const index = price_records.findIndex( record => record.id === updated_record.id );
		price_records[index] = updated_record;
		props.on_save( price_records );
    }
    
    function remove( removed_record ) {
		const price_records = records.filter( record => record.id !== removed_record.id );
        props.on_save( price_records );
    }

    function move_down( moving_record ) {
        const index = indexOf( moving_record );
        swap_places( index, index + 1 );
    }

    function move_up( moving_record ) {
        const index = indexOf( moving_record );
        swap_places( index, index - 1 );
    }

    function latest_id() {
        return records.reduce( ( prev, current ) => Math.max( prev, current.id ), 0 );
    }

    function is_first( record ) {
        return indexOf( record ) === 0;
    }

    function is_last( record ) {
        return indexOf( record ) + 1 === records.length;
    }

    function indexOf( target_record ) {
        return records.findIndex( compared_record => compared_record === target_record );
    }

    function swap_places( index_1, index_2 ) {
        const price_records = [...records];
        const record_1 = price_records[index_1];
        const record_2 = price_records[index_2];

        price_records[index_1 ] = record_2;
        price_records[index_2 ] = record_1;

		props.on_save( price_records );
    }

    return (
        <PriceRecordContext.Provider value={{
            records: records,
            add: add,
            update: update,
            remove: remove,
            move_down: move_down,
            move_up: move_up,
            is_first: is_first,
            is_last: is_last
        }}>{props.children}</PriceRecordContext.Provider>
    );
}