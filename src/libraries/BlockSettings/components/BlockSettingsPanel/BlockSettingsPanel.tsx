import { Panel, PanelBody, PanelRow, CheckboxControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BlockSettingsRecord } from '../../data/BlockSettingsRecord';
import { BlockSettingsFunction } from "../../data/BlockSettingsFunction";

type Props = {
	settings: BlockSettingsRecord,
	onChange: (property: BlockSettingsRecord) => void
}

export default function BlockSettingsPanel({ settings, onChange }: Props): JSX.Element {
	const [local_settings, setSettings] = useState(settings);

	useEffect(() => {
		onChange(local_settings);
	}, [local_settings]);

	function toggleSetting(property: any): void {
		const new_settings = BlockSettingsFunction.toggleSetting(local_settings, property);
		setSettings(new_settings);
	}


	return <Panel>
		<PanelBody
			title={__(
				'Editing Experience',
				'price-list-block-zebra'
			)}
			icon="edit"
			initialOpen={false}
		>
			<PanelRow>
				<CheckboxControl
					label={__(
						'Delete Items',
						'price-list-block-zebra'
					)}
					checked={local_settings.delete}
					onChange={() => {
						toggleSetting('delete')
					}}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={__(
						'Add Items',
						'price-list-block-zebra'
					)}
					checked={local_settings.add}
					onChange={() => {
						toggleSetting('add')
					}}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={__(
						'Edit Price',
						'price-list-block-zebra'
					)}
					checked={local_settings.edit_price}
					onChange={() => {
						toggleSetting('edit_price')
					}}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={__(
						'Edit Description',
						'price-list-block-zebra'
					)}
					checked={local_settings.edit_description}
					onChange={() => {
						toggleSetting('edit_description')
					}}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={__(
						'Order Items',
						'price-list-block-zebra'
					)}
					checked={local_settings.order_items}
					onChange={() => {
						toggleSetting('order_items');
					}}
				/>
			</PanelRow>
		</PanelBody>
	</Panel>;
}