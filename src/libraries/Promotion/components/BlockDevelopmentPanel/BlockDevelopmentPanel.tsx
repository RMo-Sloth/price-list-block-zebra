import { Panel, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
// @ts-ignore
import logo from '../../assets/logo.png';

export default function BlockDevelopmentPanel() {
	return <Panel>
		<PanelBody
			title={__('Block Development', 'price-list-block-zebra')}
			icon="info-outline"
			initialOpen={false}
		>
			<p>{__('For questions about WordPress Block Development and professional Wordpress Block development, visit:', 'price-list-block-zebra')}</p>
			<a
				href={__('https://waardwebsites.nl/contact', 'price-list-block-zebra')}
				style={{ display: 'block', margin: 'auto', width: '75%', }}
			>
				<img
					src={logo}
					alt={__('waardwebsites.nl logo', 'price-list-block-zebra')}
				/>
			</a>
		</PanelBody>
	</Panel>;
}
