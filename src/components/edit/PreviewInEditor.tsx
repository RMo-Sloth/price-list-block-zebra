import { PriceRecord } from '../../records/priceRecord/PriceRecordsFunctions';
import ReadPriceRecord from '../price-records/read/ReadPriceRecord';

export default function PreviewInEditor( { attributes } ): JSX.Element {
	return <div>
		{ attributes.price_records.map( ( record: PriceRecord ) => (
			<ReadPriceRecord key={ record.index } record={ record } />
		) ) }
	</div>;
}
