import { Button, Icon } from '@wordpress/components';
import { useEffect, useContext } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import css from './DeletePriceRecord.module.scss';
import PriceRecordContext from '../../../context/PriceRecordContext';

function DeletePriceRecord(props) {
	if (props.display === false) return null; // Do not render component

	let button_ref;

	useEffect(() => {
		if (props.focus === true) button_ref.focus();
	}, [props.focus]);

	const records = useContext(PriceRecordContext);

	function remove() {
		records.remove(props.record);
	}

	return (
		<div className={css.delete}>
			<Button
				isDestructive
				isPrimary
				isSmall
				onClick={remove}
				ref={(ref) => (button_ref = ref)}
			>
				<Icon icon={trash} size="20" />
			</Button>
		</div>
	);
}

export default DeletePriceRecord;
