import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { SettingsRecord } from '../../records/settingsRecord/settingsRecord';

import BlockDevelopmentPanel from './BlockDevelopmentPanel/BlockDevelopmentPanel';
import BlockSettingsPanel from './BlockSettingsPanel/BlockSettingsPanel';

type Props = {
	settings: SettingsRecord,
	onChange: ( settings: SettingsRecord ) => void
}

export function SidePanel( { settings, onChange }: Props ): JSX.Element {
	return <InspectorControls key="setting">
		<BlockSettingsPanel settings={settings} onChange={onChange} />
		<BlockDevelopmentPanel />
	</InspectorControls>;
}
