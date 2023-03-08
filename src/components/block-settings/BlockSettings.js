import { InspectorControls } from '@wordpress/block-editor';
import {
	CheckboxControl,
	Panel,
	PanelRow,
	PanelBody,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import BlockDevelopmentPanel from './BlockDevelopmentPanel/BlockDevelopmentPanel';
import { SettingsManager } from '../../records/settingsRecord/settingsRecord';


export default function BlockSettings( props ) {
	const [ settings, setSettings ] = useState( props.settings );

	useEffect( () => {
		props.onChange( settings );
	}, [ settings ] );

	function toggleSetting( property ) {
		const new_settings = SettingsManager.toggleSetting( settings, property );
		setSettings( new_settings );
	}


	return (
		<InspectorControls key="setting">
			<Panel>
				<PanelBody
					title={ __(
						'Editing Experience',
						'price-list-block-zebra'
					) }
					icon="edit"
					initialOpen={ false }
				>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Delete Items',
								'price-list-block-zebra'
							) }
							checked={ settings.delete }
							onChange={ () => { 
								toggleSetting( 'delete' ) 
							} }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Add Items',
								'price-list-block-zebra'
							) }
							checked={ settings.add }
							onChange={ () => { 
								toggleSetting( 'add' ) 
							} }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Edit Price',
								'price-list-block-zebra'
							) }
							checked={ settings.edit_price }
							onChange={ () => { 
								toggleSetting( 'edit_price' ) 
							} }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Edit Description',
								'price-list-block-zebra'
							) }
							checked={ settings.edit_description }
							onChange={ () => { 
								toggleSetting( 'edit_description' ) 
							} }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Order Items',
								'price-list-block-zebra'
							) }
							checked={ settings.order_items }
							onChange={ () => { 
								toggleSetting( 'order_items' ); 
							} }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
			<BlockDevelopmentPanel />
		</InspectorControls>
	);
}
