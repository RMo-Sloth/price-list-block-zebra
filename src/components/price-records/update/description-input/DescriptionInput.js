import { useEffect } from '@wordpress/element';
import css from './DescriptionInput.module.scss';

export default function DescriptionInput( props ) {
    let input_element;

    useEffect(() => {
        if( props.focus && props.editable )
            input_element.select();
    }, []);

    if( props.editable ) {
        return ( <div className={css.name}>
            <input type='text' value={ props.value } required onChange={props.onChange} ref={el => input_element = el } />
        </div> );
    } else {
        return ( <div className={css.name}>
            <span>{ props.value }</span>
        </div> );
    }
}