import React , { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Api from "../api";
//import ColumnFactory from "../column_factory";
import { ColumnModel,ColumnDataType } from 'tubular-common';
import { DataGrid,ToolbarOptions } from 'tubular-react';
/*
	const columns_ids = [
		"chain_id",
		"chain_name",
		"chain_code",
		"store_id",
		"store_name",
		"store_identifier",
		"store_street_address_1",
		"store_street_address_2" ,
		"store_zip",
		"store_lat",
		"store_lon",
		"store_city",
		"store_state"
	];
*/

/*NOTES:
 all hidden columns must be at the top for the "export" to work

*/


const StoreColumns = [
  new ColumnModel("chain_id", {
    Visible: false
  }),
  new ColumnModel("chain_name", {
    Visible: false
  }),
  new ColumnModel("chain_code", {
    Visible: false
  }),
  new ColumnModel("store_street_address_2", {
    Visible: false
  }),
  new ColumnModel("store_id", {
    IsKey: true,
    Label: "Store ID",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    DataType: ColumnDataType.NUMERIC,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),
  new ColumnModel("store_name", {
    Label: "Name",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),
  new ColumnModel("store_identifier", {
    Label: "Identifier",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),
  new ColumnModel("store_street_address_1", {
    Label: "Address",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),

  new ColumnModel("store_zip", {
    Label: "ZIP Code",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),
  new ColumnModel("store_lat", {
    Label: "Latitude",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),
  new ColumnModel("store_lon", {
    Label: "Longitude",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),
  new ColumnModel("store_city", {
    Label: "City",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  }),
  new ColumnModel("store_state", {
    Label: "State",
    Filterable: true,
    Searchable: true,
    //SortOrder: 1,
    //SortDirection: ColumnSortDirection.ASCENDING,
    //DataType: ColumnDataType.DATE_TIME,
    //Aggregate: AggregateFunctions.COUNT, //Aggregate: AggregateFunctions.SUM,
    Sortable: true
  })
];

/*
const toolbarOptions = new ToolbarOptions({
	topPager: false
});
*/

const StoresToolbar = [
  new ToolbarOptions(
  )
];

const Table = () => {

	const [data, setData] = useState();
	const [columns, setColumns] = useState([]);

	useEffect( async () => {

		// build the columns models' array 
		//setColumns( ColumnFactory(columns_ids) ); //building the columns manually above instead
		// fetch the data from the API end point
		try {
		const resp = await Api.table.data();
			setData(resp.data['data']);
		} catch(err) { console.log(err) }

	} , []);

	return(
		<DataGrid
			gridName="AuditPRO Stores "
			//columns={columns}
			columns={StoreColumns}
			dataSource={data}
			//toolbarOptions={StoresToolbar}
		/>
	);
};

export default Table;