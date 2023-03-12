import { useContext, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
// @ts-ignore
import style from './editor.module.scss';
import PriceRecordContext from '../data/PriceRecordsContext';
import SettingsContext from '../data/Settings/SettingsContext';
import { PriceRecord } from "../data/priceRecord";
import CreatePriceRecord from './create/CreatePriceRecord';
import UpdatePriceRecord from './update/UpdatePriceRecord';

export default function Edit(): JSX.Element {
	const [focusData, setFocusData] = useState({
		focus_on: null,
		initial_first_record: null,
	});

	const settings = useContext(SettingsContext);
	const price_records_context = useContext(PriceRecordContext);

	useEffect(SetInitialFocus, []);

	function SetInitialFocus(): void {
		if (price_records_context.records.length === 0) return;
		// do not select a 'new first-record' after adding / removing elements
		setFocusData({
			focus_on: 'record',
			initial_first_record: price_records_context.records[0].index,
		});
	}

	return <div>
		<div className={style['price-record-top-labels']}>
			{settings.order_items && <div className={style.order}></div>}
			<div className={style.name}>{__('Item / Service', 'price-list-block-zebra')}</div>
			<div className={style.price}>{__('Price', 'price-list-block-zebra')}</div>
			{settings.delete && <div className={style.action}></div>}
		</div>

		{price_records_context.records.map((record: PriceRecord) => <UpdatePriceRecord
			key={record.index}
			focus={focusData.initial_first_record === record.index && focusData.focus_on === 'record'}
			record={record}
		/>)}

		{settings.add && <CreatePriceRecord />}
	</div>;
}
