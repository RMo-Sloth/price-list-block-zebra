// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
// @ts-ignore
import css from './style.module.scss';

function ReadPriceRecord( props ): JSX.Element {
	const name = props.record.name.split( ' ' );
	const nameJsx = name.map( ( word, index ) => <span 
			className={ ( name.length === index + 1 ) ? css.last_word : '' }
			key={ index } >
			{ word } { ( name.length === index + 1 ) ? '' : String.fromCharCode(160) }
		</span>
	);

	return (
		<div className={ css[ 'record-row' ] + ' record-row' } data-index="1">
			<div className={ css.name }>
				{ nameJsx }
				<span className={ css.spacer }></span>
			</div>
			<div className={ css.price + ' price' }>{ props.record.price }</div>
		</div>
	);
}

export default ReadPriceRecord;
