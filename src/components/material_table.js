import React , { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Api from "../api";
import MaterialTable from 'material-table';

const StoreColumns = [
{title: 'Chain ID', field: 'chain_id', type: 'numeric', hidden: 'true'},
{title: 'Chain Name', field: 'chain_name', type: 'string', hidden: 'true'},
{title: 'Chain Code', field: 'chain_code', type: 'string', hidden: 'true'},
{title: 'Address 2', field: 'store_street_address_2', type: 'string', hidden: 'true'},
{title: 'Store ID', field: 'store_id', type: 'numeric'},
{title: 'Store Name', field: 'store_name', type: 'string'},
{title: 'Identifier', field: 'store_identifier', type: 'string'},
{title: 'Address', field: 'store_street_address_1', type: 'string'},
{title: 'Latitude', field: 'store_lat', type: 'string'},
{title: 'Longitude', field: 'store_lon', type: 'string'},
{title: 'City', field: 'store_city', type: 'string'},
{title: 'State', field: 'store_state', type: 'string'},
]

const StoreOptions = [
	{selection: true},
	{filtering: true}
]

const Table = () => {

	const [data, setData] = useState();
	const [columns, setColumns] = useState([]);

	useEffect( async () => {

		// fetch the data from the API end point
		try {
		const resp = await Api.table.data();
			setData(resp.data['data']);
		} catch(err) { console.log(err) }

	} , []);

	return(
      <div className="mui--text-center" style={{ maxWidth: '90%' }}>
      	<div>
		<MaterialTable
			title="AuditPRO Stores"
			data={data}
			columns={StoreColumns}
			options={{
				selection: true,
				filtering: true,
				exportButton: true,
				pageSize: 50,
				pageSizeOptions: [10,20,50,100,500],
			}}
	        actions={[
			      {
			        icon: 'add',
			        tooltip: 'Add Store',
			        isFreeAction: true,
			        onClick: (event) => alert("You want to add a new row")
			      }]}
		/>
		</div>
      </div>
	);
};

export default Table;