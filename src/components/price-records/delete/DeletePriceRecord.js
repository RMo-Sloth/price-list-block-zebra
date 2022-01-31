import { Button } from '@wordpress/components';

function DeletePriceRecord( props ) {
    function emit() {
        props.onEmit();
    }

    return <Button isDestructive isSmall onClick={emit} className='delete'>Delete</Button>;
}

export default DeletePriceRecord;