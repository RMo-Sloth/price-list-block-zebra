import Edit from "../Edit";
import PreviewInEditor from "../PreviewInEditor";
import { PriceRecordContextProvider } from "../../context/PriceRecord/PriceRecordsContext";
import SettingsContext from "../../data/Settings/SettingsContext";
import { SettingsRecord } from "../../data/Settings/SettingsRecord";
import { PriceRecord } from "../../data/PriceRecord/PriceRecord";
import { FocusContextProvider } from "../../context/Focus/FocusContext";

type Props = {
	isSelected: boolean,
	price_records: readonly PriceRecord[],
	settings: SettingsRecord,
	onChange: (records: readonly PriceRecord[]) => void
}

export function PriceRecordsBlock({ isSelected, price_records, settings, onChange }: Props): JSX.Element {
	const is_editable: boolean = isSelected || price_records.length === 0;

	return <PriceRecordContextProvider records={price_records} on_update={onChange} >
		<SettingsContext.Provider value={settings}>
			<FocusContextProvider>
				{is_editable ? <Edit /> : <PreviewInEditor />}
			</FocusContextProvider>
		</SettingsContext.Provider>
	</PriceRecordContextProvider>
}