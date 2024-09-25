import { registerBlockType } from '@wordpress/blocks';
import Save from './components/Save/Save';
import Edit from './components/Edit/Edit';
import meta_data from './block.json'

registerBlockType( meta_data.name, {
	edit: Edit,
	save: Save,
} );
