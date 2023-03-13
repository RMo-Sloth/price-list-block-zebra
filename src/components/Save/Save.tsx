import ReadPriceRecord from '../../libraries/PriceRecord/components/read/ReadPriceRecord';
import { useBlockProps } from '@wordpress/block-editor';
import { PriceRecord } from "../../libraries/PriceRecord/data/PriceRecord/priceRecord";

export default function Save( { attributes } ): JSX.Element {
	return <div { ...useBlockProps.save() }>
		{ attributes.price_records.map( ( record: PriceRecord ) => (
			<ReadPriceRecord key={ record.index } record={ record } />
		) ) }
	</div>;
}
