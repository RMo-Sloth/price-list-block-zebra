import { useState } from '@wordpress/element';
import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';

function UpdatePriceRecord( props ) {
    const [name, set_name] = useState( props.record.name );
    const [price, set_price] = useState( props.record.price );

    function process_changes(){
        if( name === props.record.name && price === props.record.price ) return;

        const formatted_price = Number( price ).toFixed(2).toString()
        props.onUpdate( { ...props.record, price: formatted_price, name } );
        set_price( Number( price ).toFixed(2).toString() );
    }

    function remove() {
        props.onDelete( props.record );
    }

    function update_name( event ) {
        set_name( event.target.value );
    }

    function update_price( event ) {
        set_price( event.target.value );
    }

    return (<div className={css['update-price-record']} onBlur={process_changes}>
        <div className={css.name}>
            <input type='text' value={name} required={true} onChange={update_name} />
        </div>
        <div className={css.price}>
            <input type='number' value={price} required={true} onChange={update_price}/>
        </div>
        <div className={css.delete}>
            <DeletePriceRecord onEmit={remove} ></DeletePriceRecord>
        </div>
    </div>)
}

export default UpdatePriceRecord;