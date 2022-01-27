// @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
import { registerBlockType } from '@wordpress/blocks';
// @see https://www.npmjs.com/package/@wordpress/scripts#using-css
import './style.scss';

// Internal dependencies
import Edit from './components/edit/edit';
import Save from './save';


registerBlockType('price-list-block-zebra/price-list-block-zebra', {
	edit: Edit,
	save: Save,
});
