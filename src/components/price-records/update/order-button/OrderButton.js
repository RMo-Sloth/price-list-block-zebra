
import { Button, Icon } from '@wordpress/components';
import style from './OrderButton.module.scss';
import { arrowDown, arrowUp } from '@wordpress/icons';

export default function OrderButton( props ) {

    return (<div className={style.order_button}>
        <Button isPrimary isSmall className={style.arrow_up} onClick={props.move_up}>
            <Icon icon={arrowUp} size='20' />
        </Button>
        <Button isPrimary isSmall className={style.arrow_down} onClick={props.move_down}>
            <Icon icon={arrowDown} size='20'/>
        </Button>
    </div>);
}

 