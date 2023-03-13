import { registerBlockType } from '@wordpress/blocks';
import Save from './components/Save/Save';
import Editor from './components/Edit/Editor';

registerBlockType( 'price-list-block-zebra/price-list-block-zebra', {
	edit: Editor,
	save: Save,
} );
