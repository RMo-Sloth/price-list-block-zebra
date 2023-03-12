import { PriceRecord } from "../../libraries/PriceRecord/data/priceRecord";
import ReadPriceRecord from '../../libraries/PriceRecord/components/read/ReadPriceRecord';
import { useContext } from "@wordpress/element";
import PriceRecordsContext from "../../libraries/PriceRecord/data/PriceRecordsContext";

export default function PreviewInEditor(): JSX.Element {
	const price_records_context = useContext( PriceRecordsContext );
	return <div>
		{ price_records_context.records.map( ( record: PriceRecord ) => (
			<ReadPriceRecord key={ record.index } record={ record } />
		) ) }
	</div>;
}
