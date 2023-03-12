// @ts-ignore
import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from '../../../libraries/PriceRecord/components/delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import DescriptionInput from './description-input/DescriptionInput';
import PriceInput from './price-input/PriceInput';
import { useEffect, useState, useContext } from '@wordpress/element';
import PriceRecordContext from '../../../libraries/PriceRecord/data/PriceRecordContext';
import { SettingsRecord } from '../../../records/settingsRecord/settingsRecord';
import { PriceRecord } from "../../../libraries/PriceRecord/data/priceRecord";

type Props = {
	focus: boolean,
	settings: SettingsRecord,
	record: PriceRecord
};

function UpdatePriceRecord( { focus, settings, record }: Props ): JSX.Element {
	const [ local_focus, setFocus ] = useState( null );
	const records = useContext( PriceRecordContext );

	useEffect( setInitialFocus, [ focus ] );

	function setInitialFocus(): void {
		if ( focus === false ) setFocus( null );
		else if ( settings.order_items === true )
			setFocus( 'order_button' );
		else if ( settings.edit_description === true )
			setFocus( 'description_input' );
		else if ( settings.edit_price === true )
			setFocus( 'price_input' );
		else if ( settings.delete === true ) setFocus( 'delete_button' );
	}

	function updateName( value ): void {
		if ( value === record.name ) return;

		records.update( { ...record, name: value } );
	}

	function updatePrice( value ) {
		if ( value === record.price ) return;

		records.update( { ...record, price: value } );
	}

	return <div className={ css[ 'update-price-record' ] }>
		<OrderButton
			display={ settings.order_items }
			record={ record }
			focus={ local_focus === 'order_button' }
		/>
		<DescriptionInput
			editable={ settings.edit_description }
			value={ record.name }
			onChange={ updateName }
			focus={ local_focus === 'description_input' }
		/>
		<PriceInput
			editable={ settings.edit_price }
			record={ record }
			onChange={ updatePrice }
			focus={ local_focus === 'price_input' }
		/>
		<DeletePriceRecord
			display={ settings.delete }
			record={ record }
			focus={ local_focus === 'delete_button' }
		/>
	</div>;
}

export default UpdatePriceRecord;
