import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import DescriptionInput from './description-input/DescriptionInput';
import PriceInput from './price-input/PriceInput';
import { useEffect, useState } from '@wordpress/element';

function UpdatePriceRecord( props ) {
    
    const [ focus, set_focus] = useState( null );
    
    useEffect( set_initial_focus, [ props.focus ] );

    function set_initial_focus() {
        if( props.focus === false)
            set_focus( null );
        else if( props.settings.order_items === true )
            set_focus( 'order_button' );
        else if( props.settings.edit_description === true )
            set_focus( 'description_input' );
        else if( props.settings.edit_price === true )
            set_focus( 'price_input' );
        else if( props.settings.delete === true )
            set_focus( 'delete_button' );
    }

    function update_name( value ) {
        if( value === props.record.name ) return;

        props.onUpdate( {...props.record, name: value } );
    }

    function update_price( value ) {
        if( value === props.record.price ) return;

        props.onUpdate( { ...props.record, price: value } );
    }

    function move_down() {
        props.move_down( props.index );
    }

    function move_up() {
        props.move_up( props.index );
    }

    return (<div className={css['update-price-record']} > 
        <OrderButton display={props.settings.order_items } move_down={move_down} move_up={move_up}  enable_move_up={props.index > 0} enable_move_down={props.total_records > props.index + 1} focus={ focus === 'order_button' } />
        <DescriptionInput editable={props.settings.edit_description} value={ props.record.name } onChange={update_name} focus={ focus === 'description_input' } />
        <PriceInput editable={props.settings.edit_price} value={props.record.price} onChange={update_price} focus={ focus === 'price_input' } />
        <DeletePriceRecord display={props.settings.delete} record={props.record} focus={ focus === 'delete_button' } />
    </div>)
}

export default UpdatePriceRecord;