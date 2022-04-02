// @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
import { registerBlockType } from '@wordpress/blocks';
// @see https://www.npmjs.com/package/@wordpress/scripts#using-css
// import './style.scss';

// Internal dependencies
import Save from './save';
import Editor from './Editor';

registerBlockType('price-list-block-zebra/price-list-block-zebra', {
	edit: Editor,
	save: Save,
});
