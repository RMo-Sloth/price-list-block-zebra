import { Button } from '@wordpress/components';
import style from './OrderButton.module.scss';
import { arrowUp } from '@wordpress/icons';
import { useContext } from '@wordpress/element';
import PriceRecordContext from '../../../../context/PriceRecordContext';
import { PriceRecordManager } from '../../../../records/priceRecord/priceRecord';
import { MoveDownButton } from './move-down-button/MoveDownButton';

export default function OrderButton( props ) {
	const records_context = useContext( PriceRecordContext );

	if ( props.display === false ) return null; // Aborts code, returns nothing
	if ( records_context.records.length <= 1 ) return null; // Aborts code, returns nothing

	return (
		<div className={ style.order_button }>
			<MoveUpButton focus={ props.focus } record={ props.record } />
			<MoveDownButton record={ props.record } focus={ props.focus }/>
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