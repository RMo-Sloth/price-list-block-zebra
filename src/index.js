// @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
import { registerBlockType } from '@wordpress/blocks';
// @see https://www.npmjs.com/package/@wordpress/scripts#using-css

// Internal dependencies
import Save from './Save';
import Editor from './Editor';

registerBlockType( 'price-list-block-zebra/price-list-block-zebra', {
	edit: Editor,
	save: Save,
} );
