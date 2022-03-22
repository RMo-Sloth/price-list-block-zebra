
import { Button, Icon } from '@wordpress/components';
import style from './OrderButton.module.scss';
import { arrowDown, arrowUp } from '@wordpress/icons';
import { useEffect, useContext } from '@wordpress/element';
import PriceRecordContext from '../../../../context/PriceRecordContext';

export default function OrderButton( props ) {
    
    if( props.display === false ) return null; // Aborts code, returns nothing
    if( props.enable_move_down === false && props.enable_move_up === false ) return null; // Aborts code, returns nothing
    
    let button_down_ref;
    const records = useContext( PriceRecordContext );

    useEffect(() => {
        if( props.focus === true && props.enable_move_down === true )
            button_down_ref.focus();
    }, [ props.focus ]);

    function move_down() {
        records.move_down( props.record );
    }

    function move_up() {
		records.move_up( props.record );
    }

    function MoveUpButton() { 
        if( props.enable_move_up ) {
            return (<Button isPrimary isSmall className={style.arrow_up} onClick={move_up}>
                <Icon icon={arrowUp} size='20' />
            </Button>);
        } else {
            return (<div className={style.arrow_up_placeholder}></div>);
        }
    }

    function MoveDownButton() {
        if( props.enable_move_down ) {
            return (<Button isPrimary isSmall className={style.arrow_down} onClick={move_down} ref={ el => button_down_ref = el }>
                <Icon icon={arrowDown} size='20'/>
            </Button>);
        } else {
            return (<div className={style.arrow_down_placeholder}></div>);
        }
    }

    return (<div className={style.order_button}>
        { MoveUpButton() }
        { MoveDownButton() }
    </div>);
}

 