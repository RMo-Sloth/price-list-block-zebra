import { Button } from '@wordpress/components';
import { useState, useContext, useRef, useEffect } from '@wordpress/element';
// @ts-ignore
import css from './CreatePriceRecord.module.scss';
import { plus } from '@wordpress/icons';
import PriceRecordContext from '../../data/PriceRecord/PriceRecordsContext';
import FocusContext from '../../context/Focus/FocusContext';
import { PriceRecordFunctions } from '../../data/PriceRecord/PriceRecordFunctions';

function CreatePriceRecord(): JSX.Element {
	const [price, setPrice] = useState<string>('0.00');
	const [name, setName] = useState<string>('');
	const ref = useRef<HTMLInputElement>(null);
	const records_context = useContext(PriceRecordContext);
	const { focusEvent } = useContext(FocusContext);

	useEffect(() => {
		if (ref.current && focusEvent.name === 'select_new_record')
			ref.current.focus();
	}, [focusEvent]);

	function resetRecord(): void {
		setPrice('0.00');
		setName('');
		ref.current.focus();
	}

	function add(): void {
		let new_record = PriceRecordFunctions.default()
		new_record = PriceRecordFunctions.set_price(new_record, +price);
		new_record = PriceRecordFunctions.set_name(new_record, name);
		records_context.add(new_record);
		resetRecord();
	}

	function onPriceInputChange(event) {
		if (/\.\d{3,}$/.test(event.target.value)) return;

		setPrice(event.target.value);
	}

	return <div className={css['create-price-record']}>
		<div className={css.name}>
			<input
				ref={ref}
				type="text"
				placeholder="enter a name"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
		</div>
		<div className={css.price}>
			<input
				type="number"
				placeholder="0.00"
				value={price}
				onChange={onPriceInputChange}
			/>
		</div>
		<Button variant="primary" isSmall onClick={add} icon={plus} />
	</div>;
}

export default CreatePriceRecord;
