import { Button, Icon } from '@wordpress/components';
import { trash } from '@wordpress/icons';

function DeletePriceRecord( props ) {
    function emit() {
        props.onEmit();
    }

    return <Button isDestructive isPrimary isSmall onClick={emit} >
        <Icon icon={ trash } size='20' />
    </Button>;
}

export default DeletePriceRecord;