import { PriceRecord } from '../../../../records/priceRecord/priceRecord';
// @ts-ignore
import css from '../style.module.scss';

export function WrappedWords( { record }: { record: PriceRecord } ): JSX.Element { 
	const words = record.name.split( ' ' );
	return <> 
		{ words.map( ( word, index ) => {
			const is_last = words.length === index + 1;
			return <span 
				className={ is_last ? css.last_word : '' }
				key={ index } >
				{ `${word}${ is_last ? '' : String.fromCharCode(160) }` }
			</span>
		} ) }
	</>
}