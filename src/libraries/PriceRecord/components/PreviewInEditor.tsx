import { useContext } from "@wordpress/element";
import { PriceRecord } from "../data/PriceRecord/priceRecord";
import PriceRecordsContext from "../data/PriceRecord/PriceRecordsContext";
import ReadPriceRecord from "./read/ReadPriceRecord";


export default function PreviewInEditor(): JSX.Element {
	const price_records_context = useContext( PriceRecordsContext );
	return <div>
		{ price_records_context.records.map( ( record: PriceRecord ) => (
			<ReadPriceRecord key={ record.index } record={ record } />
		) ) }
	</div>;
}
