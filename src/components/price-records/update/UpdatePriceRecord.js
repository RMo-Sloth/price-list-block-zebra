import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import DescriptionInput from './description-input/DescriptionInput';
import PriceInput from './price-input/PriceInput';

function UpdatePriceRecord( props ) {

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
        <OrderButton display={props.settings.order_items } move_down={move_down} move_up={move_up}  enable_move_up={props.index > 0} enable_move_down={props.total_records > props.index + 1} />
        <DescriptionInput editable={props.settings.edit_description} value={ props.record.name } onChange={update_name} focus={ props.index === 0 && props.settings.edit_description } />
        <PriceInput editable={props.settings.edit_price} value={props.record.price} onChange={update_price} />
        <DeletePriceRecord display={props.settings.delete} onEmit={remove} ></DeletePriceRecord>
    </div>)
}

export default UpdatePriceRecord;