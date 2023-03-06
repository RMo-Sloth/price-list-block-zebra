import { Button } from '@wordpress/components';
import style from './OrderButton.module.scss';
import { arrowDown, arrowUp } from '@wordpress/icons';
import { useEffect, useContext } from '@wordpress/element';
import PriceRecordContext from '../../../../context/PriceRecordContext';

export default function OrderButton( props ) {
	let buttonDownRef;
	const records = useContext( PriceRecordContext );

	useEffect( () => {
		if ( props.focus === true && records.is_last( props.record ) === false )
			buttonDownRef.focus();
	}, [ props.focus ] );

	function moveDown() {
		records.move_down( props.record );
	}

	function moveUp() {
		records.move_up( props.record );
	}

	function MoveUpButton() {
		if ( records.is_first( props.record ) === false ) {
			return (
				<Button
					variant="primary"
					isSmall
					className={ style.arrow_up }
					onClick={ moveUp }
					icon={ arrowUp }
				/>
			);
		}
		return (
			<Button
				variant="primary"
				isSmall
				className={ style.arrow_up_placeholder }
				icon={ arrowUp }
				disabled={ true }
			/>
		);
	}

	function MoveDownButton() {
		if ( records.is_last( props.record ) === false )
			return (
				<Button
					variant="primary"
					isSmall
					icon={ arrowDown }
					className={ style.arrow_down }
					onClick={ moveDown }
					ref={ ( el ) => ( buttonDownRef = el ) }
				/>
			);
		return (
			<Button
				variant="primary"
				isSmall
				className={ style.arrow_down_placeholder }
				icon={ arrowUp }
				disabled={ true }
			/>
		);
	}

	if ( props.display === false ) return null; // Aborts code, returns nothing
	if ( records.records.length <= 1 ) return null; // Aborts code, returns nothing

	return (
		<div className={ style.order_button }>
			{ MoveUpButton() }
			{ MoveDownButton() }
		</div>
	);
}
