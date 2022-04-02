// @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
import css from './ReadPriceRecord.module.scss';

function ReadPriceRecord(props) {
	const name = props.record.name.split(' ');
	const name_jsx = name.map((word, index) => {
		if (name.length === index + 1)
			return (
				<span className={css['last-word']} key={index}>
					{word}
				</span>
			);
		else return <span key={index}>{word}&nbsp;</span>;
	});

	return (
		<div className={css['record-row']}>
			<div className={css.name}>
				{name_jsx}
				<span className={css.spacer}></span>
			</div>
			<div className={css.price}>{props.record.price}</div>
		</div>
	);
}

export default ReadPriceRecord;
