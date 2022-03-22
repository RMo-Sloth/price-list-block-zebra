import Edit from "./components/edit/edit"
import PreviewInEditor from "./components/edit/editor-preview";
import BlockSettings from "./components/block-settings/BlockSettings";
import { useBlockProps } from '@wordpress/block-editor';
import { PriceRecordContextProvider } from "./context/PriceRecordContext";

export default function Editor( props ) {

    function update_settings( settings ) {
        props.setAttributes( { ...props.attributes, settings } );
    }

    if( props.isSelected || props.attributes.price_records.length === 0 ) {
        return ( <div { ...useBlockProps() }>
            <PriceRecordContextProvider records={props.attributes.price_records}>
                <Edit {...props} /> 
            </PriceRecordContextProvider>
            <BlockSettings settings={props.attributes.settings} onChange={update_settings} />
        </div> );
    } else {
        return ( <div { ...useBlockProps() }>
            <PriceRecordContextProvider records={props.attributes.price_records}>
                <PreviewInEditor {...props} />
            </PriceRecordContextProvider>
            <BlockSettings settings={props.attributes.settings} onChange={update_settings} />
        </div>);
    }

}