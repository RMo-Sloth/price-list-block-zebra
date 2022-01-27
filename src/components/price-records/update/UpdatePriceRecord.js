import { useState } from '@wordpress/element';
import { __experimentalNumberControl as NumberControl, TextControl } from '@wordpress/components';
import './UpdatePriceRecord.css';

function UpdatePriceRecord( props ) {
    const [product_name, set_name] = useState( props.record.name );
    const [product_price, set_price] = useState( props.record.price.toFixed(2) );

    function process_changes(){
        if( product_name !== props.record.name || product_price !== props.record.price.toFixed(2) )
            console.log('Should handle the records if it\'s modified');
    }

    return (<div className='update-price-record' onBlur={process_changes}>
        <TextControl className='name' value={product_name} required={true} onChange={set_name} />
        <NumberControl className='price' value={product_price} required={true} onChange={set_price}/>
    </div>)
}

export default UpdatePriceRecord;