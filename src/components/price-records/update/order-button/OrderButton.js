import { Button } from '@wordpress/components';
import style from './OrderButton.module.scss';
import { arrowDown, arrowUp } from '@wordpress/icons';
import { useEffect, useContext } from '@wordpress/element';
import PriceRecordContext from '../../../../context/PriceRecordContext';
import { PriceRecordManager } from '../../../../records/priceRecord/priceRecord';

export default function OrderButton( props ) {
	let buttonDownRef;
	const records_context = useContext( PriceRecordContext );

	useEffect( () => {
		if ( props.focus && ! PriceRecordManager.isLast( records_context.records, props.record ) )
			buttonDownRef.focus();
	}, [ props.focus ] );

	function MoveDownButton() {
		const is_last = PriceRecordManager.isLast( records_context.records, props.record );
		
		function moveDown() {
			records_context.move_down( props.record );
		}

		return <Button
			className={ is_last ? style.arrow_down_placeholder : style.arrow_down }
			disabled={ is_last }
			icon={ arrowDown }
			isSmall
			onClick={ moveDown }
			ref={ ( el ) => ( buttonDownRef = el ) }
			variant="primary"
		/>;
	}

	if ( props.display === false ) return null; // Aborts code, returns nothing
	if ( records_context.records.length <= 1 ) return null; // Aborts code, returns nothing

	return (
		<div className={ style.order_button }>
			<MoveUpButton focus={ props.focus } record={ props.record } />
			{ MoveDownButton() }

			{/* <MoveDownButton />, this causes an issue with keeping the button selected - Why? */}
		</div>
	);
}

function MoveUpButton( props ) {
	const records_context = useContext( PriceRecordContext );
	const is_first = PriceRecordManager.isFirst( records_context.records, props.record );

	function moveUp() {
		records_context.move_up( props.record );
	}

	return <Button
		className={ is_first ? style.arrow_up_placeholder : style.arrow_up }
		disabled={ is_first }
		icon={ arrowUp }
		isSmall
		onClick={ moveUp }
		variant="primary"
	/>;
}