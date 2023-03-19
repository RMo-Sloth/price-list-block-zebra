import { useContext, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
// @ts-ignore
import style from './editor.module.scss';
import PriceRecordContext from '../context/PriceRecord/PriceRecordsContext';
import SettingsContext from '../data/Settings/SettingsContext';
import { PriceRecord } from "../data/PriceRecord/PriceRecord";
import CreatePriceRecord from './create/CreatePriceRecord';
import UpdatePriceRecord from './update/UpdatePriceRecord';
import FocusContext from '../context/Focus/FocusContext';

export default function Edit(): JSX.Element {

	const settings = useContext(SettingsContext);
	const price_records_context = useContext(PriceRecordContext);
	const focus_context = useContext(FocusContext);

	useEffect(() => {
		if (price_records_context.records.length === 0 && settings.add)
			focus_context.setFocusEvent({ name: 'select_new_record', options: null });
		else if (settings.order_items && price_records_context.records.length > 1)
			focus_context.setFocusEvent({ name: 'focus_move_down', options: { record_index: price_records_context.records[0].index } });
		else if (settings.edit_description)
			focus_context.setFocusEvent({ name: 'select_description', options: { record_index: price_records_context.records[0].index } });
		else if (settings.edit_price)
			focus_context.setFocusEvent({ name: 'select_price', options: { record_index: price_records_context.records[0].index } });
		else if (settings.delete)
			focus_context.setFocusEvent({ name: 'focus_delete', options: { record_index: price_records_context.records[0].index } });
		else if (settings.add)
			focus_context.setFocusEvent({ name: 'select_new_record', options: null });

	}, []);

	return <div>
		<div className={style['price-record-top-labels']}>
			{settings.order_items && <div className={style.order}></div>}
			<div className={style.name}>{__('Item / Service', 'price-list-block-zebra')}</div>
			<div className={style.price}>{__('Price', 'price-list-block-zebra')}</div>
			{settings.delete && <div className={style.action}></div>}
		</div>

		{price_records_context.records.map((record: PriceRecord) => <UpdatePriceRecord
			key={record.index}
			record={record}
		/>)}

		{settings.add && <CreatePriceRecord />}
	</div>
}
