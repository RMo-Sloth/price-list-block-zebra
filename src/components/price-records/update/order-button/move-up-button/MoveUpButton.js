import { Button } from '@wordpress/components';
import style from '../OrderButton.module.scss';
import { arrowUp } from '@wordpress/icons';
import { useContext } from '@wordpress/element';
import PriceRecordContext from '../../../../../context/PriceRecordContext';
import { PriceRecordManager } from '../../../../../records/priceRecord/priceRecord';

export function MoveUpButton( props ) {
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