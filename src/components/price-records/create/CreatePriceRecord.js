import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n';
import './CreatePriceRecord.css';

function CreatePriceRecord( props ) {

    const [record, set_record] = useState( { name: '', price: 0 } );

    function emit(){
        props.onEmit( record );
        set_record( { name: '', price: 0 } );
    }

    return ( <div className='create-price-record'>
        <form>


            <Button variant="secondary" type="button" onClick={emit}>{ __('Insert', 'price-list-block-zebra') }</Button>
        </form>
    </div> );
}

export default CreatePriceRecord;