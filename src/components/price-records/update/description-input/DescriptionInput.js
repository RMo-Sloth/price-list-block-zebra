import { useEffect, useState } from '@wordpress/element';
import css from './DescriptionInput.module.scss';

export default function DescriptionInput( props ) {
    let input_element;
    const [value, set_value] = useState( props.value );

    useEffect(() => {
        if( props.focus && props.editable )
            input_element.select();
    }, []);

    useEffect( () => {
        props.onChange( value.trim() );
    }, [value]);

    function onChange( event ) {
        set_value( event.target.value );
    }

    if( props.editable ) {
        return ( <div className={css.name}>
            <input type='text' value={ value } required onChange={onChange} ref={el => input_element = el } />
        </div> );
    } else {
        return ( <div className={css.name}>
            <span>{ props.value }</span>
        </div> );
    }
}