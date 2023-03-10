import { Button } from '@wordpress/components';
import { useEffect, useContext } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import PriceRecordContext from '../../../context/PriceRecordContext';

function DeletePriceRecord( props ): JSX.Element {
	let buttonRef;
	const records = useContext( PriceRecordContext );

	useEffect( () => {
		if ( props.focus === true ) buttonRef.focus();
	}, [ props.focus ] );

	function remove(): void {
		records.remove( props.record );
	}

	if ( ! props.display ) return null; // Do not render component

	return <Button
			isDestructive
			variant="primary"
			isSmall
			onClick={ remove }
			ref={ ( ref ) => ( buttonRef = ref ) }
			icon={ trash }
		/>;
}

export default DeletePriceRecord;
