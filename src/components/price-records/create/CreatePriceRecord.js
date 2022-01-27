import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './CreatePriceRecord.css';

function CreatePriceRecord() {
    return ( <div className='create-price-record'>
        <Button variant="secondary">{ __('Insert', 'price-list-block-zebra') }</Button>
    </div> );
}

export default CreatePriceRecord;