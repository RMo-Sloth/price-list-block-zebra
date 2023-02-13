import { useEffect, useState } from '@wordpress/element';
import css from './DescriptionInput.module.scss';

export default function DescriptionInput( props ) {
	let inputElement;
	const [ value, setValue ] = useState( props.value );

	useEffect( () => {
		if ( props.focus === true ) inputElement.select();
	}, [ props.focus ] );

	useEffect( () => {
		props.onChange( value.trim() );
	}, [ value ] );

	function onChange( event ) {
		setValue( event.target.value );
	}

	if ( props.editable )
		return (
			<div className={ css.name }>
				<input
					type="text"
					value={ value }
					required
					onChange={ onChange }
					ref={ ( el ) => ( inputElement = el ) }
				/>
			</div>
		);

	return (
		<div className={ css.name }>
			<span>{ props.value }</span>
		</div>
	);
}
