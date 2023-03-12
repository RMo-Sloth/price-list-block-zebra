import { Button } from '@wordpress/components';
import { useEffect, useContext, useRef } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import PriceRecordContext from '../../data/PriceRecordsContext';

function DeletePriceRecord( props ): JSX.Element {
	const ref = useRef<HTMLButtonElement>( null );
	const records_context = useContext( PriceRecordContext );

	useEffect( () => {
		if ( props.focus === true ) ref.current.focus();
	}, [ props.focus ] );

	function remove(): void {
		records_context.remove( props.record );
	}

	if ( ! props.display ) return null; // Do not render component

	return <Button
			isDestructive
			variant="primary"
			isSmall
			onClick={ remove }
			ref={ ref }
			icon={ trash }
		/>;
}

export default DeletePriceRecord;
