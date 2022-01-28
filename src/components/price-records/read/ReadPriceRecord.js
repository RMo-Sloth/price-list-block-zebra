// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';

function ReadPriceRecord( props ){
    return <div class="record-row">
        <div class='name'>
            <span>{ props.record.name }</span>
            <span class='spacer'></span>
        </div>
        <div class='price'>&euro;{ props.record.price }</div>
    </div>;
}

export default ReadPriceRecord;