import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import DescriptionInput from './description-input/DescriptionInput';
import PriceInput from './price-input/PriceInput';
import { useEffect, useContext } from '@wordpress/element';
import FocusContext from '../../../context/focus-context';

function UpdatePriceRecord( props ) {
    
    const focus_context = useContext( FocusContext );
    const is_first = props.index === 0;
    
    useEffect( () => {
        if( props.settings.order_items === true )
            focus_context.set_focus( 'order_button' );
        else if( props.settings.edit_description === true )
            focus_context.set_focus( 'description_input' );
        else if( props.settings.edit_price === true )
            focus_context.set_focus( 'price_input' );
        else if( props.settings.delete === true )
            focus_context.set_focus( 'delete_button' );
    }, [] );

    useEffect( () => {
        console.log( focus_context.focus )
    }, [focus_context] );

    function remove() {
        props.onDelete( props.record );
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
        <OrderButton display={props.settings.order_items } move_down={move_down} move_up={move_up}  enable_move_up={props.index > 0} enable_move_down={props.total_records > props.index + 1} focus={ focus_context.focus === 'order_button' && is_first} />
        <DescriptionInput editable={props.settings.edit_description} value={ props.record.name } onChange={update_name} focus={ focus_context.focus === 'description_input' && is_first } />
        <PriceInput editable={props.settings.edit_price} value={props.record.price} onChange={update_price} focus={ focus_context.focus === 'price_input' && is_first } />
        <DeletePriceRecord display={props.settings.delete} onEmit={remove} focus={ focus_context.focus === 'delete_button' && is_first } />
    </div>)
}

export default UpdatePriceRecord;