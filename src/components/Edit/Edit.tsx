import { SidePanel } from '../SidePanel/SidePanel';
import { useBlockProps } from '@wordpress/block-editor';
import { BlockSettingsRecord } from '../../libraries/BlockSettings/data/BlockSettingsRecord';
import { PriceRecordsBlock } from '../../libraries/PriceRecord/components/PriceRecordsBlock/PriceRecordsBlock';
import { PriceRecordCollection } from '../../libraries/PriceRecord/data/PriceRecordCollection/PriceRecordCollection';

export default function Edit(props: any): JSX.Element {
	function updateSettings(settings: BlockSettingsRecord): void {
		props.setAttributes({ ...props.attributes, settings });
	}

	function updateRecords(records: PriceRecordCollection): void {
		props.setAttributes({ ...props.attributes, price_records: records });
	}

	return <div {...useBlockProps()}>
		<PriceRecordsBlock settings={props.attributes.settings} price_records={props.attributes.price_records} isSelected={props.isSelected} onChange={updateRecords} />
		<SidePanel settings={props.attributes.settings} onChange={updateSettings} />
	</div>;
}
