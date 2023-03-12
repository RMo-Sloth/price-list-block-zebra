import { Button } from '@wordpress/components';
// @ts-ignore
import style from '../OrderButton.module.scss'
import { arrowDown } from '@wordpress/icons';
import { useEffect, useContext, useRef } from '@wordpress/element';
import PriceRecordContext from '../../../../../libraries/PriceRecord/data/PriceRecordContext';
import { PriceRecordsFunctions } from '../../../../../libraries/PriceRecord/data/PriceRecordsFunctions';

export function MoveDownButton( props ): JSX.Element {
	const ref = useRef<HTMLButtonElement>( null );
	const records_context = useContext( PriceRecordContext );
	const is_last = PriceRecordsFunctions.isLast( records_context.records, props.record );
	
	useEffect( () => {
		if ( props.focus && ! PriceRecordsFunctions.isLast( records_context.records, props.record ) )
			ref.current.focus();
	}, [ props.focus ] );

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