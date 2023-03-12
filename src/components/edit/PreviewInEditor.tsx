import { PriceRecord } from "../../libraries/PriceRecord/data/priceRecord";
import ReadPriceRecord from '../../libraries/PriceRecord/components/read/ReadPriceRecord';

export default function PreviewInEditor( { attributes } ): JSX.Element {
	return <div>
		{ attributes.price_records.map( ( record: PriceRecord ) => (
			<ReadPriceRecord key={ record.index } record={ record } />
		) ) }
	</div>;
}
