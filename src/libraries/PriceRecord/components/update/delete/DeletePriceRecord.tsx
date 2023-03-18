import { Button } from '@wordpress/components';
import { useEffect, useContext, useRef } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import FocusContext from '../../../data/Focus/FocusContext';
import { PriceRecord } from '../../../data/PriceRecord/PriceRecord';
import PriceRecordContext from '../../../data/PriceRecord/PriceRecordsContext';
import { PriceRecordCollectionFunctions } from '../../../data/PriceRecordCollection/PriceRecordCollectionFunctions';
import SettingsContext from '../../../data/Settings/SettingsContext';

function DeletePriceRecord(props): JSX.Element {
	const ref = useRef<HTMLButtonElement>(null);
	const records_context = useContext(PriceRecordContext);
	const settings = useContext(SettingsContext);
	const { focusEvent, setFocusEvent } = useContext(FocusContext);

	useEffect(() => {
		if (ref.current && focusEvent.name === 'focus_delete' && focusEvent.options.record_index === props.record.index)
			ref.current.focus();
	}, [focusEvent]);

	function remove(): void {
		const next_record: PriceRecord = PriceRecordCollectionFunctions.nextRecord(records_context.records, props.record);
		const previous_record: PriceRecord = PriceRecordCollectionFunctions.previousRecord(records_context.records, props.record);
		if (next_record)
			setFocusEvent({ name: 'focus_delete', options: { record_index: next_record.index } })
		else if (previous_record)
			setFocusEvent({ name: 'focus_delete', options: { record_index: previous_record.index } })
		else if (settings.add)
			setFocusEvent({ name: 'select_new_record', options: null })

		records_context.remove(props.record);
	}

	return settings.delete && <Button
		isDestructive
		variant="primary"
		isSmall
		onClick={remove}
		ref={ref}
		icon={trash}
	/>;
}

export default DeletePriceRecord;
