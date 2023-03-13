import { Button } from '@wordpress/components';
import { useEffect, useContext, useRef } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import FocusContext from '../../../data/Focus/FocusContext';
import PriceRecordContext from '../../../data/PriceRecord/PriceRecordsContext';
import SettingsContext from '../../../data/Settings/SettingsContext';

function DeletePriceRecord(props): JSX.Element {
	const ref = useRef<HTMLButtonElement>(null);
	const records_context = useContext(PriceRecordContext);
	const settings = useContext(SettingsContext);
	const {focusEvent} = useContext(FocusContext);

	useEffect(() => {
		if ( ref.current && focusEvent.name === 'focus_delete' && focusEvent.options.record_index === props.record.index )
			ref.current.focus();
	}, [focusEvent]);

	function remove(): void {
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
