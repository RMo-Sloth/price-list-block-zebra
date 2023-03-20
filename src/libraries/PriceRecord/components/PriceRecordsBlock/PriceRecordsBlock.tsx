import Edit from "../Edit/Edit";
import EditorPreview from "../EditorPreview/EditorPreview";
import { PriceRecordContextProvider } from "../../context/PriceRecord/PriceRecordsContext";
import SettingsContext from "../../context/BlockSettings/SettingsContext";
import { SettingsRecord } from "../../data/Settings/SettingsRecord";
import { FocusContextProvider } from "../../context/Focus/FocusContext";
import { PriceRecordCollection } from "../../data/PriceRecordCollection/PriceRecordCollection";

type Props = {
	isSelected: boolean,
	price_records: PriceRecordCollection,
	settings: SettingsRecord,
	onChange: (records: PriceRecordCollection) => void
}

export function PriceRecordsBlock({ isSelected, price_records, settings, onChange }: Props): JSX.Element {
	const is_editable: boolean = isSelected || price_records.length === 0;

	return <PriceRecordContextProvider records={price_records} on_update={onChange} >
		<SettingsContext.Provider value={settings}>
			<FocusContextProvider>
				{is_editable ? <Edit /> : <EditorPreview />}
			</FocusContextProvider>
		</SettingsContext.Provider>
	</PriceRecordContextProvider>
}