import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import BlockDevelopmentPanel from './BlockDevelopmentPanel/BlockDevelopmentPanel';
import BlockSettingsPanel from './BlockSettingsPanel/BlockSettingsPanel';


export function SidePanel(props) {
	return (<InspectorControls key="setting">
		<BlockSettingsPanel settings={props.settings} onChange={props.onChange} />
		<BlockDevelopmentPanel />
	</InspectorControls>
	);
}
