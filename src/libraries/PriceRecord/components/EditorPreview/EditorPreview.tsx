import { useContext } from "@wordpress/element";
import { PriceRecord } from "../../data/PriceRecord/PriceRecord";
import PriceRecordsContext from "../../context/PriceRecord/PriceRecordsContext";
import ReadPriceRecord from "../read/ReadPriceRecord";


export default function EditorPreview(): JSX.Element {
	const price_records_context = useContext( PriceRecordsContext );
	return <div>
		{ price_records_context.records.map( ( record: PriceRecord ) => (
			<ReadPriceRecord key={ record.index } record={ record } />
		) ) }
	</div>;
}
