import CreatePriceRecord from '../price-records/create/CreatePriceRecord';
import UpdatePriceRecord from '../price-records/update/UpdatePriceRecord';

// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';
import style from './editor.module.scss';

export default function Edit({ attributes, setAttributes }) {

	function add_record( record ) {
		const records = [...attributes.price_records, record ];
		setAttributes( { price_records: records, price_record_latest_index: record.id } );
	}

	function delete_record( deleted_record ) {
		const price_records = attributes.price_records.filter( record => record.id !== deleted_record.id );
		setAttributes( {price_records} );
	}

	function update_record( updated_record ) {
		const price_records = [ ...attributes.price_records ];
		const index = price_records.findIndex( record => record.id === updated_record.id );
		price_records[index] = updated_record;
		setAttributes( { price_records } );
	}

	function move_record_down( index ) {
		const price_records = [...attributes.price_records];
		const [record] = price_records.splice( index, 1 );
		price_records.splice( index + 1, 0, record  );

		setAttributes( { price_records } );
	}

	function move_record_up( index ) {
		const price_records = [...attributes.price_records];
		const [record] = price_records.splice( index, 1 );
		price_records.splice( index - 1, 0, record  );

		setAttributes( { price_records } );
	}

	return ( <div>
		<div className={style['price-record-top-labels']}>
			<div className={style.name}>{ __( 'Item / Service', 'price-list-block-zebra' ) }</div>
			<div className={style.price}>{ __( 'Price', 'price-list-block-zebra' ) }</div>
			<div className={style.action}></div>
		</div>
		{ attributes.price_records.map( (record, index) => <UpdatePriceRecord key={record.id} move_down={move_record_down} move_up={move_record_up} onDelete={delete_record} onUpdate={update_record} index={index} total_records={attributes.price_records.length} record={ record } /> ) }
		<CreatePriceRecord onEmit={add_record} latest_id={ attributes.price_record_latest_index } />
	</div>);
}
