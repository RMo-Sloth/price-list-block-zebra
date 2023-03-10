// @ts-ignore
import css from './PriceInput.module.scss';
import { useState, useEffect } from '@wordpress/element';
import { PriceRecord } from '../../../../records/priceRecord/priceRecord';

type Props = {
	focus: boolean, 
	record: PriceRecord, 
	editable: boolean, 
	onChange: ( value: string ) => void  
};

export default function PriceInput( { focus, record, editable, onChange }: Props ): JSX.Element {
	let inputRef;
	const [ value, setValue ] = useState( record.price.toString() );

	useEffect( () => {
		onChange( Number( value ).toFixed( 2 ) );
	}, [ value ] );

	useEffect( () => {
		if ( focus ) inputRef.select();
	}, [ focus ] );

	function onValueChange( event ): void {
		setValue( event.target.value );
	}

	function onBlur( event ): void {
		setValue( Number( event.target.value ).toFixed( 2 ) );
	}

	if ( editable )
		return <div className={ css.price }>
			<input
				type="number"
				value={ value }
				required={ true }
				onChange={ onValueChange }
				onBlur={ onBlur }
				ref={ ( ref ) => ( inputRef = ref ) }
			/>
		</div>;

	return <div className={ css.price }>
		<span> { record.price } </span>
	</div>;
}
