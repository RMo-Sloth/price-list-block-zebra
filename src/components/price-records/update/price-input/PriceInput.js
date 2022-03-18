import css from './PriceInput.module.scss';
import { useState, useEffect } from '@wordpress/element';

export default function PriceInput( props ) {

    const [ value, set_value ] = useState( props.value );

    useEffect( () => {
        props.onChange( Number( value ).toFixed(2) );
    }, [ value ]);

    function onChange( event ) {
        set_value( event.target.value );
    }

    function onBlur( event ) {
        set_value( Number( event.target.value).toFixed(2) );
    }

    if( props.editable ) {
        return ( <div className={css.price}>
            <input type='number' value={ value } required={true} onChange={onChange} onBlur={onBlur} />
        </div> );
    } else {
        return ( <div className={css.price}>
            <span> { props.value } </span>
        </div> ); 
    }
}