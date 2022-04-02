import ReadPriceRecord from '../price-records/read/ReadPriceRecord';

export default function PreviewInEditor({ attributes }) {
	return (
		<div>
			{attributes.price_records.map((record) => (
				<ReadPriceRecord key={record.id} record={record} />
			))}
		</div>
	);
}
