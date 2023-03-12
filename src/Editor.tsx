import Edit from './libraries/PriceRecord/components/Edit';
import { SidePanel } from './components/SidePanel/SidePanel';
import { useBlockProps } from '@wordpress/block-editor';
import { PriceRecordContextProvider } from './libraries/PriceRecord/data/PriceRecordsContext';
import { PriceRecord } from "./libraries/PriceRecord/data/priceRecord";
import { BlockSettingsRecord } from './libraries/BlockSettings/data/settingsRecord';
import SettingsContext from './libraries/PriceRecord/data/Settings/SettingsContext';
import PreviewInEditor from './libraries/PriceRecord/components/PreviewInEditor';

export default function Editor(props: any): JSX.Element {
	const is_editable: boolean = props.isSelected || props.attributes.price_records.length === 0;

	function updateSettings(settings: BlockSettingsRecord): void {
		props.setAttributes({ ...props.attributes, settings });
	}

	function updateRecords(records: PriceRecord[]): void {
		props.setAttributes({ ...props.attributes, price_records: records });
	}

	return <div {...useBlockProps()}>
		<PriceRecordContextProvider records={props.attributes.price_records} on_update={updateRecords} >
			<SettingsContext.Provider value={props.attributes.settings}>
				{is_editable ? <Edit /> : <PreviewInEditor />}
			</SettingsContext.Provider>
		</PriceRecordContextProvider>
		<SidePanel settings={props.attributes.settings} onChange={updateSettings} />
	</div>;
}
