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

/* 
    DRAG_AND_DROP ( plan )
    x create buttoninstde list-tiems
    set 'draggable' icon for button on list items ( temp ... )
    select list item
        onDRagSTart
        pass data ( log it )

        onDragHover
            place dragged item before/after hovered item ( index )
            place hovered item before dragged item
            // items.splice( index, 0, dragged_item )



*/