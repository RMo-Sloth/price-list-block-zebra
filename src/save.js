import ReadPriceRecord from './components/price-records/read/ReadPriceRecord';
import { useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			{ attributes.price_records.map( ( record ) => (
				<ReadPriceRecord key={ record.id } record={ record } />
			) ) }
		</div>
	);
}
