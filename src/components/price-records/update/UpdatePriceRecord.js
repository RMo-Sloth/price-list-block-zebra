import { useState } from '@wordpress/element';
import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import DescriptionInput from './description-input/DescriptionInput';

function UpdatePriceRecord( props ) {
    const [name, set_name] = useState( props.record.name );
    const [price, set_price] = useState( props.record.price );
    
    function process_changes(){
        if( name === props.record.name && price === props.record.price ) return;

        const formatted_price = Number( price ).toFixed(2).toString();
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

    function move_down() {
        props.move_down( props.index );
    }

    function move_up() {
        props.move_up( props.index );
    }

    function delete_button() {
        if( props.settings.delete ) {
            return (<div className={css.delete}>
                <DeletePriceRecord onEmit={remove} ></DeletePriceRecord>
            </div>);
        }
    }

    function price_input() {
        if( props.settings.edit_price ) {
            return ( <div className={css.price}>
                <input type='number' value={price} required={true} onChange={update_price}/>
            </div> );
        } else {
            return ( <div className={css.price}>
                <span> { price } </span>
            </div> ); 
        }
    }

    return (<div className={css['update-price-record']} onBlur={process_changes} > 
        <OrderButton display={props.settings.order_items } move_down={move_down} move_up={move_up}  enable_move_up={props.index > 0} enable_move_down={props.total_records > props.index + 1} />
        <DescriptionInput editable={props.settings.edit_description} value={ name } onChange={update_name} focus={ props.index === 0 && props.settings.edit_description } />
        { price_input() }
        { delete_button() }
    </div>)
}

export default UpdatePriceRecord;