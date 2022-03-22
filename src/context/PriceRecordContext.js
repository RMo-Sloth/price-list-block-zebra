import { createContext, useEffect } from "@wordpress/element";
import { useState } from '@wordpress/element';

const PriceRecordContext = createContext({
    records: [],
    add: ( record ) => {},
    remove: ( record ) => {},
    on_save: () => {}
});
export default PriceRecordContext;




export function PriceRecordContextProvider( props ) {
    const [records, set_records] = useState({
        records: [...props.records],
        add,
        remove
    });

    useEffect( () => {
        set_records( [...props.records] );
    }, [props.records] )

    function add( record ) {
        const enhanced_record = {...record, id: latest_id() + 1};
        props.on_save( [...records, enhanced_record ] );
    }

    function update( updated_record ) {
        console.log('update record');
        const price_records = [ ...records ];
		const index = price_records.findIndex( record => record.id === updated_record.id );
		price_records[index] = updated_record;
		props.on_save( price_records );
    }
    
    function remove( removed_record ) {
		const price_records = records.filter( record => record.id !== removed_record.id );
        props.on_save( price_records );
    }

    function latest_id() {
        if( records.length === 0 )
            return 0;
        else {
            const records_sorted = [...records].sort( (a, b) => ( a.id > b.id ) ? 1 : -1  );
            return records_sorted[ records_sorted.length - 1 ].id;
        }
    }

    return (
        <PriceRecordContext.Provider value={{
            records: records,
            add: add,
            update: update,
            remove: remove
        }}>{props.children}</PriceRecordContext.Provider>
    );
}