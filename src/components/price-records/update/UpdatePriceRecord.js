import { useState } from '@wordpress/element';
import { __experimentalNumberControl as NumberControl, TextControl } from '@wordpress/components';
import './UpdatePriceRecord.css';

function UpdatePriceRecord( {record} ) {
    console.log( record );
    return (<div className='update-price-record'>
        <TextControl className='name' value={record.name} required={true} />
        <NumberControl className='price' value={record.price.toFixed(2)} required={true} />
    </div>)
}

export default UpdatePriceRecord;