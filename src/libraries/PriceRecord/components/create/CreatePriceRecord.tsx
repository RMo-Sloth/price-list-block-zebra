import { Button } from '@wordpress/components';
import { useState, useContext, useRef } from '@wordpress/element';
// @ts-ignore
import css from './CreatePriceRecord.module.scss';
import { plus } from '@wordpress/icons';
import PriceRecordContext from '../../data/PriceRecordsContext';

function CreatePriceRecord(): JSX.Element {
	const [ record, setRecord ] = useState( { name: '', price: '', index: null } );
	const ref = useRef<HTMLInputElement>( null );
	const records = useContext( PriceRecordContext );

	function resetRecord(): void {
		setRecord( { name: '', price: '',  index: null } );
		ref.current.focus();
	}

	function add(): void {
		const price = +Number( record.price ).toFixed( 2 );
		records.add( { ...record, price } );
		resetRecord();
	}

	function setName( event ): void {
		const name = event.target.value;
		setRecord( { ...record, name } );
	}

	function setPrice( event ): void {
		const price = event.target.value;
		setRecord( { ...record, price } );
	}

	return <div className={ css[ 'create-price-record' ] }>
			<div className={ css.name }>
				<input
					ref={ ref }
					type="text"
					placeholder="enter a name"
					value={ record.name }
					onChange={ setName }
				/>
			</div>
			<div className={ css.price }>
				<input
					type="number"
					placeholder="0.00"
					value={ record.price }
					onChange={ setPrice }
				/>
			</div>
			<Button variant="primary" isSmall onClick={ add } icon={ plus } />
		</div>;
}

export default CreatePriceRecord;
