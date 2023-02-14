import Edit from './components/edit/edit';
import PreviewInEditor from './components/edit/editor-preview';
import BlockSettings from './components/block-settings/BlockSettings';
import { useBlockProps } from '@wordpress/block-editor';
import { PriceRecordContextProvider } from './context/PriceRecordContext';

export default function Editor( props ) {
	const blockProps = useBlockProps();

	function updateSettings( settings ) {
		props.setAttributes( { ...props.attributes, settings } );
	}

	function updateRecords( records ) {
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
				<BlockSettings
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
			<BlockSettings
				settings={ props.attributes.settings }
				onChange={ updateSettings }
			/>
		</div>
	);
}
