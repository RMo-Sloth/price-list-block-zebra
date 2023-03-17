import { Button } from '@wordpress/components';
import { useState, useContext, useRef, useEffect } from '@wordpress/element';
// @ts-ignore
import css from './CreatePriceRecord.module.scss';
import { plus } from '@wordpress/icons';
import PriceRecordContext from '../../data/PriceRecord/PriceRecordsContext';
import FocusContext from '../../data/Focus/FocusContext';
import { PriceRecord } from '../../data/PriceRecord/PriceRecord';
import { PriceRecordFunctions } from '../../data/PriceRecord/PriceRecordFunctions';

function CreatePriceRecord(): JSX.Element {
	const [record, setRecord] = useState<PriceRecord>(PriceRecordFunctions.default());
	const ref = useRef<HTMLInputElement>(null);
	const records_context = useContext(PriceRecordContext);
	const { focusEvent } = useContext(FocusContext);

	useEffect(() => {
		if (ref.current && focusEvent.name === 'select_new_record')
			ref.current.focus();
	}, [focusEvent]);

	function resetRecord(): void {
		setRecord(PriceRecordFunctions.default());
		ref.current.focus();
	}

	function add(): void {
		const price = +Number(record.price).toFixed(2);
		records_context.add({ ...record, price });
		resetRecord();
	}

	function setName(event): void {
		const new_record = PriceRecordFunctions.set_name(record, event.target.value);
		setRecord(new_record);
	}

	function setPrice(event): void {
		if (/\.\d{3,}$/.test(event.target.value)) return;

		const price = event.target.value;
		setRecord({ ...record, price });
	}

	return <div className={css['create-price-record']}>
		<div className={css.name}>
			<input
				ref={ref}
				type="text"
				placeholder="enter a name"
				value={record.name}
				onChange={setName}
			/>
		</div>
		<div className={css.price}>
			<input
				type="number"
				placeholder="0.00"
				value={record.price}
				onChange={setPrice}
			/>
		</div>
		<Button variant="primary" isSmall onClick={add} icon={plus} />
	</div>;
}

export default CreatePriceRecord;
