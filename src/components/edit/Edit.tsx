import CreatePriceRecord from '../price-records/create/CreatePriceRecord';
import UpdatePriceRecord from '../price-records/update/UpdatePriceRecord';
import { useContext, useEffect, useState } from '@wordpress/element';

// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';
// @ts-ignore
import style from './editor.module.scss';
import PriceRecordContext from '../../records/priceRecord/PriceRecordContext';
import { PriceRecord } from '../../records/priceRecord/priceRecord';

export default function Edit( { attributes } ): JSX.Element {
	const [ focusData, setFocusData ] = useState( {
		focus_on: null,
		initial_first_record: null,
	} );

	useEffect( SetInitialFocus, [] );

	function SetInitialFocus(): void {
		if ( attributes.price_records.length === 0 ) return;
		// do not select a 'new first-record' after adding / removing elements
		setFocusData( {
			focus_on: 'record',
			initial_first_record: attributes.price_records[ 0 ].index,
		} );
	}

	const priceRecordsManager = useContext( PriceRecordContext );

	return <div>
		<div className={ style[ 'price-record-top-labels' ] }>
			{ attributes.settings.order_items ? <div className={ style.order }></div> : null }
			<div className={ style.name }>{ __( 'Item / Service', 'price-list-block-zebra' ) }</div>
			<div className={ style.price }>{ __( 'Price', 'price-list-block-zebra' ) }</div>
			{ attributes.settings.delete ? <div className={ style.action }></div> : null }
		</div>

		{ priceRecordsManager.records.map( ( record: PriceRecord ) => <UpdatePriceRecord
			key={ record.index }
			focus={ focusData.initial_first_record === record.index && focusData.focus_on === 'record' }
			record={ record }
			settings={ attributes.settings }
		/> ) }
		
		{ attributes.settings.add ? <CreatePriceRecord /> : null }
	</div>;
}
