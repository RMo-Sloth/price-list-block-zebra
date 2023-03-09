import style from './OrderButton.module.scss';
import { useContext } from '@wordpress/element';
import PriceRecordContext from '../../../../context/PriceRecordContext';
import { MoveDownButton } from './move-down-button/MoveDownButton';
import { MoveUpButton } from './move-up-button/MoveUpButton';

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