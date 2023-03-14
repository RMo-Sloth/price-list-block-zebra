// @ts-ignore
import style from './OrderButton.module.scss';
import { useContext } from '@wordpress/element';
import { MoveDownButton } from './move-down-button/MoveDownButton';
import { MoveUpButton } from './move-up-button/MoveUpButton';
import { PriceRecord } from "../../../data/PriceRecord/PriceRecord";
import SettingsContext from '../../../data/Settings/SettingsContext';

export default function OrderButton({ record }: { record: PriceRecord }): JSX.Element {
	const settings = useContext(SettingsContext);

	return settings.order_items && <div className={style.order_button}>
		<MoveUpButton record={record} />
		<MoveDownButton record={record} />
	</div>;
}