import { SidePanel } from '../SidePanel/SidePanel';
import { useBlockProps } from '@wordpress/block-editor';
import { BlockSettingsRecord } from '../../libraries/BlockSettings/data/BlockSettingsRecord';
import { PriceRecordsBlock } from '../../libraries/PriceRecord/components/PriceRecordsBlock/PriceRecordsBlock';
import { PriceRecord } from '../../libraries/PriceRecord/data/priceRecord';

export default function Editor(props: any): JSX.Element {
	function updateSettings(settings: BlockSettingsRecord): void {
		props.setAttributes({ ...props.attributes, settings });
	}

	function updateRecords(records: PriceRecord[]): void {
		props.setAttributes({ ...props.attributes, price_records: records });
	}

	return <div {...useBlockProps()}>
		<PriceRecordsBlock {...props} onChange={updateRecords} />
		<SidePanel settings={props.attributes.settings} onChange={updateSettings} />
	</div>;
}
