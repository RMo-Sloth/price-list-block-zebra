import Edit from './components/edit/edit';
import PreviewInEditor from './components/edit/editor-preview';
import { SidePanel } from './components/SidePanel/SidePanel';
import { useBlockProps } from '@wordpress/block-editor';
import { PriceRecordContextProvider } from './context/PriceRecordContext';

export default function Editor( props: any ): JSX.Element {
	const blockProps = useBlockProps();

	function updateSettings( settings: any ): void {
		props.setAttributes( { ...props.attributes, settings } );
	}

	function updateRecords( records: any ): void {
		props.setAttributes( { ...props.attributes, price_records: records } );
	}

	if ( props.isSelected || props.attributes.price_records.length === 0 ) {
		return (
			<div { ...blockProps }>
				<PriceRecordContextProvider
					records={ props.attributes.price_records }
					on_save={ updateRecords }
				>
					<Edit { ...props } />
				</PriceRecordContextProvider>
				<SidePanel
					settings={ props.attributes.settings }
					onChange={ updateSettings }
				/>
			</div>
		);
	}
	return (
		<div { ...blockProps }>
			<PriceRecordContextProvider
				records={ props.attributes.price_records }
				on_save={ updateRecords }
			>
				<PreviewInEditor { ...props } />
			</PriceRecordContextProvider>
			<SidePanel
				settings={ props.attributes.settings }
				onChange={ updateSettings }
			/>
		</div>
	);
}
