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
        console.log('adding record');
    }
    
    function remove( removed_record ) {
		const price_records = records.filter( record => record.id !== removed_record.id );
        props.on_save( price_records );
    }

    return (
        <PriceRecordContext.Provider value={{
            records: records,
            add: add,
            remove: remove
        }}>{props.children}</PriceRecordContext.Provider>
    );
}