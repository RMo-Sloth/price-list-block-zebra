// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
// @ts-ignore
import css from './style.module.scss';

import { PriceRecord } from "../../data/PriceRecord/PriceRecord";
import { WrappedWords } from './WrappedWords/WrappedWords';

function ReadPriceRecord( { record }: { record: PriceRecord } ): JSX.Element {
	return <div className={ css[ 'record-row' ] + ' record-row' } >
		<div className={ css.name }>
			<WrappedWords record={record} />
			<span className={ css.spacer }></span>
		</div>
		<div className={ css.price + ' price' }>{ record.price.toFixed(2) }</div>
	</div>;
}

export default ReadPriceRecord;
