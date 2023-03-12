import { Button } from '@wordpress/components';
// @ts-ignore
import style from '../OrderButton.module.scss';
import { arrowUp } from '@wordpress/icons';
import { useContext } from '@wordpress/element';
import PriceRecordContext from '../../../../../libraries/PriceRecord/data/PriceRecordContext';
import { PriceRecordsFunctions } from '../../../../../libraries/PriceRecord/data/PriceRecordsFunctions';

export function MoveUpButton( props ): JSX.Element {
	const records_context = useContext( PriceRecordContext );
	const is_first: boolean = PriceRecordsFunctions.isFirst( records_context.records, props.record );

	function moveUp(): void {
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