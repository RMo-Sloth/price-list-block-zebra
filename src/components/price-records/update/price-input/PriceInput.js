import css from './PriceInput.module.scss';
import { useState, useEffect } from '@wordpress/element';

export default function PriceInput( props ) {
	let inputRef;
	const [ value, setValue ] = useState( props.value );

	useEffect( () => {
		props.onChange( Number( value ).toFixed( 2 ) );
	}, [ value ] );

	useEffect( () => {
		if ( props.focus ) inputRef.select();
	}, [ props.focus ] );

	function onChange( event ) {
		setValue( event.target.value );
	}

	function onBlur( event ) {
		setValue( Number( event.target.value ).toFixed( 2 ) );
	}

	if ( props.editable )
		return (
			<div className={ css.price }>
				<input
					type="number"
					value={ value }
					required={ true }
					onChange={ onChange }
					onBlur={ onBlur }
					ref={ ( ref ) => ( inputRef = ref ) }
				/>
			</div>
		);
	return (
		<div className={ css.price }>
			<span> { props.value } </span>
		</div>
	);
}
