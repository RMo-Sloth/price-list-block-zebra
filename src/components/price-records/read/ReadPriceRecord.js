// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import { __ } from '@wordpress/i18n';

function ReadPriceRecord( props ){
    const name = props.record.name.split( ' ' );
    const name_jsx = name.map( (word, index) => {
        if( name.length === index + 1 ) 
            return <span className='word last-word' key={index}>{word}</span>;
        else
            return <span className='word' key={index}>{word}&nbsp;</span>;
    });

    return <div className="record-row">
        <div className='name'>
            { name_jsx }
            <span className='spacer'></span>
        </div>
        <div className='price'>{ props.record.price }</div>
    </div>;
}

export default ReadPriceRecord;