import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import DescriptionInput from './description-input/DescriptionInput';
import PriceInput from './price-input/PriceInput';
import { useEffect, useState, useContext } from '@wordpress/element';
import PriceRecordContext from '../../../context/PriceRecordContext';

function UpdatePriceRecord( props ) {
    
    const [ focus, set_focus] = useState( null );
    const records = useContext( PriceRecordContext );

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

        records.update( {...props.record, name: value } );
    }

    function update_price( value ) {
        if( value === props.record.price ) return;

        records.update( { ...props.record, price: value } );
    }

    return (<div className={css['update-price-record']} > 
        <OrderButton display={props.settings.order_items } record={props.record} enable_move_down={records.records.length > props.index + 1} focus={ focus === 'order_button' } />
        <DescriptionInput editable={props.settings.edit_description} value={ props.record.name } onChange={update_name} focus={ focus === 'description_input' } />
        <PriceInput editable={props.settings.edit_price} value={props.record.price} onChange={update_price} focus={ focus === 'price_input' } />
        <DeletePriceRecord display={props.settings.delete} record={props.record} focus={ focus === 'delete_button' } />
    </div>)
}

export default UpdatePriceRecord;