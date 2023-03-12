import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { BlockSettingsRecord } from '../../libraries/BlockSettings/data/BlockSettingsRecord';

import BlockDevelopmentPanel from './BlockDevelopmentPanel/BlockDevelopmentPanel';
import BlockSettingsPanel from './BlockSettingsPanel/BlockSettingsPanel';

type Props = {
	settings: BlockSettingsRecord,
	onChange: ( settings: BlockSettingsRecord ) => void
}

export function SidePanel( { settings, onChange }: Props ): JSX.Element {
	return <InspectorControls key="setting">
		<BlockSettingsPanel settings={settings} onChange={onChange} />
		<BlockDevelopmentPanel />
	</InspectorControls>;
}
