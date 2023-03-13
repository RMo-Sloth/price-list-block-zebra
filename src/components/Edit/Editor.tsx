import { SidePanel } from '../SidePanel/SidePanel';
import { useBlockProps } from '@wordpress/block-editor';
import { BlockSettingsRecord } from '../../libraries/BlockSettings/data/BlockSettingsRecord';
import { PriceRecordsBlock } from '../../libraries/PriceRecord/components/PriceRecordsBlock/PriceRecordsBlock';
import { PriceRecord } from '../../libraries/PriceRecord/data/PriceRecord/priceRecord';

export default function Editor(props: any): JSX.Element {
	function updateSettings(settings: BlockSettingsRecord): void {
		props.setAttributes({ ...props.attributes, settings });
	}

	function updateRecords(records: PriceRecord[]): void {
		props.setAttributes({ ...props.attributes, price_records: records });
	}

	return <div {...useBlockProps()}>
		<PriceRecordsBlock settings={props.attributes.settings} price_records={props.attributes.price_records} isSelected={props.isSelected} onChange={updateRecords} />
		<SidePanel settings={props.attributes.settings} onChange={updateSettings} />
	</div>;
}
