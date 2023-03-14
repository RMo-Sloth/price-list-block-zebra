// @ts-ignore
import css from './PriceInput.module.scss';
import { useState, useEffect, useRef, useContext } from '@wordpress/element';
import { PriceRecord } from "../../../data/PriceRecord/PriceRecord";
import SettingsContext from '../../../data/Settings/SettingsContext';
import FocusContext from '../../../data/Focus/FocusContext';

type Props = {
	record: PriceRecord, 
	onChange: ( value: number ) => void  
};

export default function PriceInput( { record, onChange }: Props ): JSX.Element {
	const ref = useRef<HTMLInputElement>( null );
	const [ value, setValue ] = useState<string>( Number(record.price).toFixed(2) );
	const settings = useContext(SettingsContext);
	const { focusEvent } = useContext(FocusContext);


	useEffect( () => {
		onChange( +Number( value ).toFixed( 2 ) );
	}, [ value ] );

	useEffect( () => {
		if ( ref.current && focusEvent.name === 'select_price' && focusEvent.options.record_index === record.index ) 
			ref.current.select();
	}, [ focusEvent ] );

	function onValueChange( event ): void {
		setValue( event.target.value );
	}

	function onBlur( event ): void {
		setValue( Number( event.target.value ).toFixed( 2 ) );
	}

	if ( settings.edit_price )
		return <div className={ css.price }>
			<input
				type="number"
				value={ value }
				required={ true }
				onChange={ onValueChange }
				onBlur={ onBlur }
				ref={ ref }
			/>
		</div>;

	return <div className={ css.price }>
		<span> { record.price } </span>
	</div>;
}
