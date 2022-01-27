import CreatePriceRecord from '../price-records/create/CreatePriceRecord';

// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import UpdatePriceRecord from '../price-records/update/UpdatePriceRecord';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	function add_price() {
		const price_records = [...attributes.price_records, { name: 'Chocolate', price: 12.00 }];
		setAttributes( { price_records } );
	}
	
	return ( <div { ...useBlockProps() }>
		{ attributes.price_records.map( (record, index) => <UpdatePriceRecord key={index} record={ record } /> ) }
		<CreatePriceRecord records={ attributes.price_records } />
		<button onClick={add_price}>Add New</button>
	</div>);
}
