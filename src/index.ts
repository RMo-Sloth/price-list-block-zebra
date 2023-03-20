import { registerBlockType } from '@wordpress/blocks';
import Save from './components/Save/Save';
import Edit from './components/Edit/Edit';

registerBlockType( 'price-list-block-zebra/price-list-block-zebra', {
	edit: Edit,
	save: Save,
} );
