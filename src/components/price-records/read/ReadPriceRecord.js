// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';

function ReadPriceRecord( props ){
    return <div>{ __('Name:', 'price-list-block-zebra') } { props.record.name }</div>;
}

export default ReadPriceRecord;