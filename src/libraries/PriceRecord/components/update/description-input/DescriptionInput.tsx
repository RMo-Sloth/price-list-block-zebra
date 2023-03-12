import { useContext, useEffect, useRef, useState } from '@wordpress/element';
import SettingsContext from '../../../data/Settings/SettingsContext';
// @ts-ignore
import css from './DescriptionInput.module.scss';

export default function DescriptionInput( props ) {
	const ref = useRef<HTMLInputElement>( null );
	const [ value, setValue ] = useState( props.value );
	const settings = useContext(SettingsContext);

	useEffect( () => {
		if ( props.focus === true ) ref.current.select();
	}, [ props.focus ] );

	useEffect( () => {
		props.onChange( value.trim() );
	}, [ value ] );

	function onChange( event ) {
		setValue( event.target.value );
	}

	if ( settings.edit_description )
		return <div className={ css.name }>
			<input
				type="text"
				value={ value }
				required
				onChange={ onChange }
				ref={ ref }
			/>
		</div>;

	return <div className={ css.name }>
		<span>{ props.value }</span>
	</div>;
}
