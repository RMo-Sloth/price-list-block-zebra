import { createContext, useEffect } from "@wordpress/element";
import { useState } from '@wordpress/element';

const PriceRecordContext = createContext({
    records: []
});
export default PriceRecordContext;

export function PriceRecordContextProvider( props ) {
    const [value, set_value] = useState({
        records: [...props.records]
    });

    useEffect( () => {
        set_value({
            records: [...props.records]
        });
    }, [props.records] )


    return (
        <PriceRecordContext.Provider value={value}>{props.children}</PriceRecordContext.Provider>
    );
}