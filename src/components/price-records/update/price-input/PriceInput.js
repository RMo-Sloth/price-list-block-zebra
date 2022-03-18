import css from './PriceInput.module.scss';

export default function PriceInput( props ) {
    if( props.editable ) {
        return ( <div className={css.price}>
            <input type='number' value={ props.value } required={true} onChange={props.onChange}/>
        </div> );
    } else {
        return ( <div className={css.price}>
            <span> { props.value } </span>
        </div> ); 
    }
}