import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import DescriptionInput from './description-input/DescriptionInput';
import PriceInput from './price-input/PriceInput';
import { useEffect, useState, useContext } from '@wordpress/element';
import PriceRecordContext from '../../../context/PriceRecordContext';

function UpdatePriceRecord( props ) {
	const [ focus, setFocus ] = useState( null );
	const records = useContext( PriceRecordContext );

	useEffect( setInitialFocus, [ props.focus ] );

	function setInitialFocus() {
		if ( props.focus === false ) setFocus( null );
		else if ( props.settings.order_items === true )
			setFocus( 'order_button' );
		else if ( props.settings.edit_description === true )
			setFocus( 'description_input' );
		else if ( props.settings.edit_price === true )
			setFocus( 'price_input' );
		else if ( props.settings.delete === true ) setFocus( 'delete_button' );
	}

	function updateName( value ) {
		if ( value === props.record.name ) return;

		records.update( { ...props.record, name: value } );
	}

	function updatePrice( value ) {
		if ( value === props.record.price ) return;

		records.update( { ...props.record, price: value } );
	}

	return (
		<div className={ css[ 'update-price-record' ] }>
			<OrderButton
				display={ props.settings.order_items }
				record={ props.record }
				focus={ focus === 'order_button' }
			/>
			<DescriptionInput
				editable={ props.settings.edit_description }
				value={ props.record.name }
				onChange={ updateName }
				focus={ focus === 'description_input' }
			/>
			<PriceInput
				editable={ props.settings.edit_price }
				record={ props.record }
				onChange={ updatePrice }
				focus={ focus === 'price_input' }
			/>
			<DeletePriceRecord
				display={ props.settings.delete }
				record={ props.record }
				focus={ focus === 'delete_button' }
			/>
		</div>
	);
}

export default UpdatePriceRecord;
