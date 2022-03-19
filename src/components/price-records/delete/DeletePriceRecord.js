import { Button, Icon } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import css from './DeletePriceRecord.module.scss';

function DeletePriceRecord( props ) {
    if( props.display === false ) return null; // Do not render component

    let button_ref;

    useEffect( () => {
        if( props.focus === true )
            button_ref.focus();
    }, [props.focus]);

    function emit() {
        props.onEmit();
    }

    return ( <div className={css.delete} >
        <Button isDestructive isPrimary isSmall onClick={emit} ref = { ref => button_ref = ref } >
            <Icon icon={ trash } size='20' />
        </Button>
    </div> );
}

export default DeletePriceRecord;