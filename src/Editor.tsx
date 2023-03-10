import Edit from './components/edit/edit';
import PreviewInEditor from './components/edit/PreviewInEditor';
import { SidePanel } from './components/SidePanel/SidePanel';
import { useBlockProps } from '@wordpress/block-editor';
import { PriceRecordContextProvider } from './context/PriceRecordContext';
import { PriceRecord } from './records/priceRecord/priceRecord';
import { SettingsRecord } from './records/settingsRecord/settingsRecord';

export default function Editor( props: any ): JSX.Element {
	const is_editable: boolean = props.isSelected || props.attributes.price_records.length === 0;

	function updateSettings( settings: SettingsRecord ): void {
		props.setAttributes( { ...props.attributes, settings } );
	}

	function updateRecords( records: PriceRecord[] ): void {
		props.setAttributes( { ...props.attributes, price_records: records } );
	}

	return <div { ...useBlockProps() }>
		<PriceRecordContextProvider records={ props.attributes.price_records } on_save={ updateRecords } >
			{ is_editable ? <Edit { ...props } /> : <PreviewInEditor { ...props } /> }
		</PriceRecordContextProvider>
		<SidePanel settings={ props.attributes.settings } onChange={ updateSettings } />
	</div>;
}
