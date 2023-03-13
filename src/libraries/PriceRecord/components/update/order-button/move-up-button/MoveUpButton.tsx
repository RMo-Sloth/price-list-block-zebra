import { Button } from '@wordpress/components';
// @ts-ignore
import style from '../OrderButton.module.scss';
import { arrowUp } from '@wordpress/icons';
import { useContext, useEffect, useRef } from '@wordpress/element';
import PriceRecordContext from '../../../../data/PriceRecord/PriceRecordsContext';
import { PriceRecordsFunctions } from '../../../../data/PriceRecord/PriceRecordsFunctions';
import FocusContext from '../../../../data/Focus/FocusContext';

export function MoveUpButton(props): JSX.Element {
	const ref = useRef(null);
	const records_context = useContext(PriceRecordContext);
	const is_first: boolean = PriceRecordsFunctions.isFirst(records_context.records, props.record);
	const { focusEvent, setFocusEvent } = useContext(FocusContext);

	useEffect(() => {
		if (ref.current && focusEvent.name === 'focus_move_up' && focusEvent.options.record_index === props.record.index)
			ref.current.focus();
	}, [focusEvent]);

	function moveUp(): void {
		if (records_context.records.indexOf(props.record) === 1)
			setFocusEvent({ name: 'focus_move_down', options: { record_index: props.record.index } });

		records_context.move_up(props.record);
	}

	return <Button
		className={is_first ? style.arrow_up_placeholder : style.arrow_up}
		disabled={is_first}
		icon={arrowUp}
		isSmall
		onClick={moveUp}
		ref={ref}
		variant="primary"
	/>;
}