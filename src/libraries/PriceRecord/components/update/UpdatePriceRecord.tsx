// @ts-ignore
import css from './UpdatePriceRecord.module.scss';
import DeletePriceRecord from './delete/DeletePriceRecord';
import OrderButton from './order-button/OrderButton';
import PriceInput from './price-input/PriceInput';
import { useContext } from '@wordpress/element';
import PriceRecordContext from '../../context/PriceRecord/PriceRecordsContext';
import { PriceRecord } from "../../data/PriceRecord/PriceRecord";
import DescriptionInput from './description-input/DescriptionInput';

type Props = {
	record: PriceRecord
};

function UpdatePriceRecord({ record }: Props): JSX.Element {
	const records_context = useContext(PriceRecordContext);

	function updateName(value): void {
		if (value === record.name) return;

		records_context.update({ ...record, name: value });
	}

	function updatePrice(value: number) {
		if (value === record.price) return;

		records_context.update({ ...record, price: value });
	}

	return <div className={css['update-price-record']}>
		<OrderButton
			record={record}
		/>
		<DescriptionInput
			record={record}
			onChange={updateName}
		/>
		<PriceInput
			record={record}
			onChange={updatePrice}
		/>
		<DeletePriceRecord
			record={record}
		/>
	</div>;
}

export default UpdatePriceRecord;
