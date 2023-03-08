import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import BlockDevelopmentPanel from './BlockDevelopmentPanel/BlockDevelopmentPanel';
import BlockSettingsPanel from './BlockSettingsPanel/BlockSettingsPanel';


export default function BlockSettings( props ) {
	return ( <InspectorControls key="setting">
			<BlockSettingsPanel settings={ props.settings } onChange={ props.onChange }/>
			<BlockDevelopmentPanel />
		</InspectorControls>
	);
}
