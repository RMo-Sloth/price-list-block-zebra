// @ts-ignore
import style from './OrderButton.module.scss';
import { useContext } from '@wordpress/element';
import PriceRecordContext from '../../../data/PriceRecord/PriceRecordsContext';
import { MoveDownButton } from './move-down-button/MoveDownButton';
import { MoveUpButton } from './move-up-button/MoveUpButton';
import { PriceRecord } from "../../../data/PriceRecord/PriceRecord";
import SettingsContext from '../../../data/Settings/SettingsContext';

export default function OrderButton({ record }: { record: PriceRecord }): JSX.Element {
	const records_context = useContext(PriceRecordContext);
	const settings = useContext(SettingsContext);

	if (!settings.order_items) return null; // Aborts code, returns nothing
	if (records_context.records.length <= 1) return null; // Aborts code, returns nothing

	return <div className={style.order_button}>
		<MoveUpButton record={record} />
		<MoveDownButton record={record} />
	</div>;
}