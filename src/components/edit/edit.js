import CreatePriceRecord from '../price-records/create/CreatePriceRecord';
import UpdatePriceRecord from '../price-records/update/UpdatePriceRecord';
import { useContext, useEffect, useState } from '@wordpress/element';

// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';
import style from './editor.module.scss';
import PriceRecordContext from '../../context/PriceRecordContext';

export default function Edit({ attributes, setAttributes }) {
	
	

	const [focus_data, set_focus_data] = useState({ focus_on: null, initial_first_record: null });

	useEffect( set_initial_focus, []);
	
	function set_initial_focus() {
		if( attributes.price_records.length === 0 ) return;
		// do not select a 'new first-record' after adding / removing elements
		set_focus_data({
			focus_on: 'record', 
			initial_first_record: attributes.price_records[0].id
		});
	}
	


	
	
	
	const price_records_manager = useContext( PriceRecordContext );

	function create_price_record() {
		if( attributes.settings.add )
			return <CreatePriceRecord />
	}


	function action_label() {
		if( attributes.settings.delete )
			return <div className={style.action}></div>;
	}

	function order_label() {
		if( attributes.settings.order_items )
			return ( <div className={style.order}></div> );
	}

	return ( 
			<div>
				<div className={style['price-record-top-labels']}>
					{ order_label() }
					<div className={style.name}>{ __( 'Item / Service', 'price-list-block-zebra' ) }</div>
					<div className={style.price}>{ __( 'Price', 'price-list-block-zebra' ) }</div>
					{ action_label() }
				</div>
				{ console.log( price_records_manager.records ) }
				{ price_records_manager.records.map( (record, index) => <UpdatePriceRecord key={record.id} focus={focus_data.initial_first_record === record.id && focus_data.focus_on === 'record' } index={index} record={ record } settings={attributes.settings} /> ) }
				{ create_price_record() }
			</div>
	)
}