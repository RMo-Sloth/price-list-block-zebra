// @ts-ignore
import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from './delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import PriceInput from './price-input/PriceInput';
import { useEffect, useState, useContext } from '@wordpress/element';
import PriceRecordContext from '../../data/PriceRecord/PriceRecordsContext';
import { PriceRecord } from "../../data/PriceRecord/priceRecord";
import DescriptionInput from './description-input/DescriptionInput';
import SettingsContext from '../../data/Settings/SettingsContext';

type Props = {
	focus: boolean,
	record: PriceRecord
};

function UpdatePriceRecord({ focus, record }: Props): JSX.Element {
	const [local_focus, setFocus] = useState(null);
	const records_context = useContext(PriceRecordContext);
	const settings = useContext(SettingsContext);

	useEffect(setInitialFocus, [focus]);

	function setInitialFocus(): void {
		if (focus === false) setFocus(null);
		else if (settings.order_items === true)
			setFocus('order_button');
		else if (settings.edit_description === true)
			setFocus('description_input');
		else if (settings.edit_price === true)
			setFocus('price_input');
		else if (settings.delete === true) setFocus('delete_button');
	}

	function updateName(value): void {
		if (value === record.name) return;

		records_context.update({ ...record, name: value });
	}

	function updatePrice(value) {
		if (value === record.price) return;

		records_context.update({ ...record, price: value });
	}

	return <div className={css['update-price-record']}>
		<OrderButton
			record={record}
			focus={local_focus === 'order_button'}
		/>
		<DescriptionInput
			value={record.name}
			onChange={updateName}
			focus={local_focus === 'description_input'}
		/>
		<PriceInput
			record={record}
			onChange={updatePrice}
			focus={local_focus === 'price_input'}
		/>
		<DeletePriceRecord
			record={record}
			focus={local_focus === 'delete_button'}
		/>
	</div>;
}

export default UpdatePriceRecord;
