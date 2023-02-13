import { Button, Icon } from '@wordpress/components';
import { useEffect, useContext } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import css from './DeletePriceRecord.module.scss';
import PriceRecordContext from '../../../context/PriceRecordContext';

function DeletePriceRecord( props ) {
	let buttonRef;
	const records = useContext( PriceRecordContext );

	useEffect( () => {
		if ( props.focus === true ) buttonRef.focus();
	}, [ props.focus ] );

	function remove() {
		records.remove( props.record );
	}

	if ( props.display === false ) return null; // Do not render component

	return (
		<div className={ css.delete }>
			<Button
				isDestructive
				isPrimary
				isSmall
				onClick={ remove }
				ref={ ( ref ) => ( buttonRef = ref ) }
			>
				<Icon icon={ trash } size="20" />
			</Button>
		</div>
	);
}

export default DeletePriceRecord;
