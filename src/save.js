import ReadPriceRecord from './components/price-records/read/ReadPriceRecord';

export default function Save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			{attributes.price_records.map((record) => (
				<ReadPriceRecord key={record.id} record={record} />
			))}
		</div>
	);
}
