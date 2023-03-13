import { Button } from '@wordpress/components';
// @ts-ignore
import style from '../OrderButton.module.scss'
import { arrowDown } from '@wordpress/icons';
import { useEffect, useContext, useRef } from '@wordpress/element';
import PriceRecordContext from '../../../../data/PriceRecord/PriceRecordsContext';
import { PriceRecordsFunctions } from '../../../../data/PriceRecord/PriceRecordsFunctions';
import FocusContext from '../../../../data/Focus/FocusContext';

export function MoveDownButton( props ): JSX.Element {
	const ref = useRef<HTMLButtonElement>( null );
	const records_context = useContext( PriceRecordContext );
	const { focusEvent } = useContext(FocusContext);
	const is_last = PriceRecordsFunctions.isLast( records_context.records, props.record );

	useEffect( () => {
		if( focusEvent.name === 'focus_move_down' && focusEvent.options.record_index === props.record.index )
			ref.current.focus();
	}, [focusEvent]);

	function moveDown(): void {
		records_context.move_down( props.record );
	}

	return <Button
		className={ is_last ? style.arrow_down_placeholder : style.arrow_down }
		disabled={ is_last }
		icon={ arrowDown }
		isSmall
		onClick={ moveDown }
		variant="primary"
		record={ props.record }
		ref={ ref }
	/>;
}