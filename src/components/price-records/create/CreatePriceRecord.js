import { Button } from '@wordpress/components';
import { useState, createRef } from '@wordpress/element'
import { __ } from '@wordpress/i18n';
import './CreatePriceRecord.css';

function CreatePriceRecord( props ) {

    const [record, set_record] = useState( { name: '', price: '1.00' } );
    const name_input_ref = createRef();

    function emit(){
        props.onEmit( {...record, price: +record.price} );
        set_record( { name: '', price: '1.00' } );
        name_input_ref.current.focus();
    }

    function set_name( event ) {
        const name = event.target.value;
        set_record( {...record, name} );
    }

    function set_price( event ) {
        const price = event.target.value;
        set_record( {...record, price} );
    }

    return ( <form className='create-price-record'>
        <input ref={name_input_ref} type='text' className='name' value={record.name} onChange={set_name} />
        <input type='number' className='price' value={record.price} onChange={set_price} />
        <Button variant="secondary" type="button" onClick={emit}>{ __('Insert', 'price-list-block-zebra') }</Button>
    </form> );
}

export default CreatePriceRecord;