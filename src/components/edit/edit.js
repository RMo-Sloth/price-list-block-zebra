import CreatePriceRecord from '../price-records/create/CreatePriceRecord';
import UpdatePriceRecord from '../price-records/update/UpdatePriceRecord';
import { useContext, useEffect, useState } from '@wordpress/element';

// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';
import style from './editor.module.scss';
import PriceRecordContext from '../../context/PriceRecordContext';

export default function Edit( { attributes } ) {
	const [ focusData, setFocusData ] = useState( {
		focus_on: null,
		initial_first_record: null,
	} );

	useEffect( SetInitialFocus, [] );

	function SetInitialFocus() {
		if ( attributes.price_records.length === 0 ) return;
		// do not select a 'new first-record' after adding / removing elements
		setFocusData( {
			focus_on: 'record',
			initial_first_record: attributes.price_records[ 0 ].id,
		} );
	}

	const priceRecordsManager = useContext( PriceRecordContext );

	function createPriceRecord() {
		if ( attributes.settings.add ) return <CreatePriceRecord />;
	}

	function actionLabel() {
		if ( attributes.settings.delete )
			return <div className={ style.action }></div>;
	}

	function orderLabel() {
		if ( attributes.settings.order_items )
			return <div className={ style.order }></div>;
	}

	return (
		<div>
			<div className={ style[ 'price-record-top-labels' ] }>
				{ orderLabel() }
				<div className={ style.name }>
					{ __( 'Item / Service', 'price-list-block-zebra' ) }
				</div>
				<div className={ style.price }>
					{ __( 'Price', 'price-list-block-zebra' ) }
				</div>
				{ actionLabel() }
			</div>
			{ priceRecordsManager.records.map( ( record ) => (
				<UpdatePriceRecord
					key={ record.id }
					focus={
						focusData.initial_first_record === record.id &&
						focusData.focus_on === 'record'
					}
					record={ record }
					settings={ attributes.settings }
				/>
			) ) }
			{ createPriceRecord() }
		</div>
	);
}
