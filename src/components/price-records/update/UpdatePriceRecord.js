import { useState, useEffect } from '@wordpress/element';
import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';

function UpdatePriceRecord( props ) {
    let name_input_element;
    const [name, set_name] = useState( props.record.name );
    const [price, set_price] = useState( props.record.price );

    useEffect( () => {
        if( props.index === 0 )
            name_input_element.select();

    }, []);

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

    function order_button() {
        if( props.settings.order_items )
            return ( <OrderButton move_down={move_down} move_up={move_up}  enable_move_up={props.index > 0} enable_move_down={props.total_records > props.index + 1} /> );
    }

    function price_input() {
        if( props.settings.edit_price ) {
            return ( <div className={css.price}>
                <input type='number' disabled={ false } value={price} required={true} onChange={update_price}/>
            </div> );
        } else {
            return ( <div className={css.price}>
                <span> { price } </span>
            </div> ); 
        }
    }

    return (<div className={css['update-price-record']} onBlur={process_changes} > 
        { order_button() }
        <div className={css.name}>
            <input disabled={ !props.settings.edit_description } type='text' value={name} required={true} onChange={update_name} ref={el => name_input_element = el } />
        </div>
        { price_input() }
        { delete_button() }
    </div>)
}

export default UpdatePriceRecord;