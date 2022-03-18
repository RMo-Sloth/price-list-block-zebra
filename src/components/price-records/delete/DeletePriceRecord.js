import { Button, Icon } from '@wordpress/components';
import { trash } from '@wordpress/icons';
import css from './DeletePriceRecord.module.scss';

function DeletePriceRecord( props ) {
    if( props.display === false ) return null;

    function emit() {
        props.onEmit();
    }

    return ( <div className={css.delete}>
        <Button isDestructive isPrimary isSmall onClick={emit} >
            <Icon icon={ trash } size='20' />
        </Button>
    </div> );
}

export default DeletePriceRecord;