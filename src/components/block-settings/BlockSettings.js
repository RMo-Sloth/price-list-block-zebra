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

export default function BlockSettings( props ) {
	const [ settings, setSettings ] = useState( props.settings );

	useEffect( () => {
		props.onChange( settings );
	}, [ settings ] );

	function toggleDelete() {
		setSettings( {
			...settings,
			delete: ! settings.delete,
		} );
	}

	function toggleAdd() {
		setSettings( {
			...settings,
			add: ! settings.add,
		} );
	}

	function toggleEditPrice() {
		setSettings( {
			...settings,
			edit_price: ! settings.edit_price,
		} );
	}

	function toggleEditDescription() {
		setSettings( {
			...settings,
			edit_description: ! settings.edit_description,
		} );
	}

	function toggleOrderItems() {
		setSettings( {
			...settings,
			order_items: ! settings.order_items,
		} );
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
							onChange={ toggleDelete }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Add Items',
								'price-list-block-zebra'
							) }
							checked={ settings.add }
							onChange={ toggleAdd }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Edit Price',
								'price-list-block-zebra'
							) }
							checked={ settings.edit_price }
							onChange={ toggleEditPrice }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Edit Description',
								'price-list-block-zebra'
							) }
							checked={ settings.edit_description }
							onChange={ toggleEditDescription }
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label={ __(
								'Order Items',
								'price-list-block-zebra'
							) }
							checked={ settings.order_items }
							onChange={ toggleOrderItems }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
			<BlockDevelopmentPanel />
		</InspectorControls>
	);
}
