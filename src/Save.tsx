import ReadPriceRecord from './components/price-records/read/ReadPriceRecord';
import { useBlockProps } from '@wordpress/block-editor';
import { PriceRecord } from './records/priceRecord/priceRecord';

export default function Save( { attributes } ): JSX.Element {
	return <div { ...useBlockProps.save() }>
		{ attributes.price_records.map( ( record: PriceRecord ) => (
			<ReadPriceRecord key={ record.index } record={ record } />
		) ) }
	</div>;
}
