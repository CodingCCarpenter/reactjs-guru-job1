// may not need this anymore?
import { ColumnModel } from 'tubular-common';

const ColumnFactory = ( data = null) => {

	let columns = [];
	data.forEach(function(v, k) {
		columns.push( new ColumnModel(v) );
	});
	return columns;
}

export default ColumnFactory;
