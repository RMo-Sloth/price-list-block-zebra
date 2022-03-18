import css from './DescriptionInput.module.scss';

export default function DescriptionInput( props ) {

    if( props.editable ) {
        return ( <div className={css.name}>
            <input type='text' value={ props.value } required onChange={props.onChange} />
            {/* NOTE I remove 'ref={el => name_input_element = el } ' */}
        </div> );
    } else {
        return ( <div className={css.name}>
            <span>{ props.value }</span>
        </div> );
    }
}