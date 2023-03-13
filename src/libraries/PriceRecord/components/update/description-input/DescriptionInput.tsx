import { useContext, useEffect, useRef, useState } from '@wordpress/element';
import FocusContext from '../../../data/Focus/FocusContext';
import SettingsContext from '../../../data/Settings/SettingsContext';
// @ts-ignore
import css from './DescriptionInput.module.scss';

export default function DescriptionInput( props ) {
	const [ value, setValue ] = useState( props.record.name );
	const settings = useContext(SettingsContext);
	const { focusEvent } = useContext(FocusContext);
	const ref = useRef<HTMLInputElement>( null );

	useEffect( () => {

		if ( ref.current && focusEvent.name === 'select_description' && focusEvent.options.record_index === props.record.index )
			ref.current.select();
			
	}, [ focusEvent ] );

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
		<span>{ value }</span>
	</div>;
}
