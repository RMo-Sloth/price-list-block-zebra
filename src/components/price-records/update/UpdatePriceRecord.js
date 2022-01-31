import { useState } from '@wordpress/element';
import './UpdatePriceRecord.css';

function UpdatePriceRecord( props ) {
    const [product_name, set_name] = useState( props.record.name );
    const [product_price, set_price] = useState( props.record.price );

    function process_changes(){
        if( product_name !== props.record.name || product_price !== props.record.price )
            console.log('Should handle the records if it\'s modified');
    }

    return (<div className='update-price-record' onBlur={process_changes}>
        <div className="name">
            <input type='text' value={product_name} required={true} onChange={set_name} />
        </div>
        <div className="price">
            <input type='number' className='price' value={product_price} required={true} onChange={set_price}/>
        </div>
    </div>)
}

export default UpdatePriceRecord;