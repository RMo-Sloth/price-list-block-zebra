
import { Button, Icon } from '@wordpress/components';
import style from './OrderButton.module.scss';
import { arrowDown, arrowUp } from '@wordpress/icons';

export default function OrderButton( props ) {
    if( props.display === false ) return null;

    function MoveUpButton() { 
        if( props.enable_move_up ) {
            return (<Button isPrimary isSmall className={style.arrow_up} onClick={props.move_up}>
                <Icon icon={arrowUp} size='20' />
            </Button>);
        } else {
            return (<div className={style.arrow_up_placeholder}></div>);
        }
    }

    function MoveDownButton() {
        if( props.enable_move_down ) {
            return (<Button isPrimary isSmall className={style.arrow_down} onClick={props.move_down}>
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

 