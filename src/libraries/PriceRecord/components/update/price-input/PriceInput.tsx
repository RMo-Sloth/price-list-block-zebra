// @ts-ignore
import css from './PriceInput.module.scss';
import { useState, useEffect, useRef, useContext } from '@wordpress/element';
import { PriceRecord } from "../../../data/PriceRecord/PriceRecord";
import SettingsContext from '../../../data/Settings/SettingsContext';

type Props = {
	focus: boolean, 
	record: PriceRecord, 
	onChange: ( value: string ) => void  
};

export default function PriceInput( { focus, record, onChange }: Props ): JSX.Element {
	const ref = useRef<HTMLInputElement>( null );
	const [ value, setValue ] = useState( record.price.toString() );
	const settings = useContext(SettingsContext);


	useEffect( () => {
		onChange( Number( value ).toFixed( 2 ) );
	}, [ value ] );

	useEffect( () => {
		if ( focus ) ref.current.select();
	}, [ focus ] );

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
