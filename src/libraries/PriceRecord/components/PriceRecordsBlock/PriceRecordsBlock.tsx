import Edit from "../Edit";
import PreviewInEditor from "../PreviewInEditor";
import { PriceRecordContextProvider } from "../../data/PriceRecordsContext";
import SettingsContext from "../../data/Settings/SettingsContext";

export function PriceRecordsBlock(props) {
	const is_editable: boolean = props.isSelected || props.attributes.price_records.length === 0;

	return <PriceRecordContextProvider records={props.attributes.price_records} on_update={props.onChange} >
		<SettingsContext.Provider value={props.attributes.settings}>
			{is_editable ? <Edit /> : <PreviewInEditor />}
		</SettingsContext.Provider>
	</PriceRecordContextProvider>
}