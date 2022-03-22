import { Button, Icon } from '@wordpress/components';
import { useState, createRef, useContext } from '@wordpress/element'
import css from './CreatePriceRecord.module.scss';

import { plus } from '@wordpress/icons';
import PriceRecordContext from '../../../context/PriceRecordContext';

function CreatePriceRecord( props ) {

    const [record, set_record] = useState( { name: '', price: '' } );
    const name_input_ref = createRef();
    const records = useContext( PriceRecordContext );
    function emit(){
        const price = Number( record.price ).toFixed(2);
        const id = records.latest_id() + 1;
        props.onEmit( {...record, price, id } );
        set_record( { name: '', price: '' } );
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

    return ( <div className={css['create-price-record']}>
        <div className={css.name}>
            <input ref={name_input_ref} type='text' placeholder='enter a name' value={record.name} onChange={set_name} />
        </div>
        <div className={css.price}>
            <input type='number' placeholder='0.00' value={record.price} onChange={set_price} />
        </div>
        <Button isPrimary isSmall onClick={emit} className={css.insert}>
            <Icon icon={plus} size='20' />
        </Button>
    </div> );
}

export default CreatePriceRecord;