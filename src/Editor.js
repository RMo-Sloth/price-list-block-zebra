import Edit from "./components/edit/edit"
import PreviewInEditor from "./components/edit/editor-preview";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
 import { useBlockProps } from '@wordpress/block-editor';

export default function Editor( props ) {
    if( props.isSelected || props.attributes.price_records.length === 0 ) {
        return ( <div { ...useBlockProps() }>
            <Edit {...props} />
        </div> );
    } else {
        return ( <div { ...useBlockProps() }>
            <PreviewInEditor {...props} />
        </div> );
    }
}