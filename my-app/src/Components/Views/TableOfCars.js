import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../Styles/sweetalert.css'
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import { Checkbox } from '@mui/material';
import { swalArchiveCar, swalDeleteCar, swalEditCar, swalUnArchiveCar } from "../../functions.js"
import { sethighlightCar } from '../../functions.js';
import Swal from 'sweetalert2'
import axios from 'axios';
import { MdDisabledByDefault } from 'react-icons/md';
import "../../Styles/tablestyles.css"
import Button from 'react-bootstrap/Button'

function TableOfCars(props) {
	let data = props.data

	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	function changeColor(car, status){
		Swal.fire({
			title: "Status Color was changed",
		 }).then(() => {
			 axios.put("/changeStatus", {
				 vin: car.vin,
				 status: status
			 }).then(() => {
				 data.update();
			 })
		 });
	}
	data.carList.map(car => (
		car.bttn = <DropdownButton id="dropdown-basic-button" variant="dark" title="Options">
			{!car.archived && <Dropdown.Item onClick={() => swalEditCar(car, data)}>Change Location</Dropdown.Item>}
			{!car.archived && <Dropdown.Item onClick={() => sethighlightCar(car.spot_name)} as={Link} to='/map'>Show on map</Dropdown.Item>}
			{!car.archived && <Dropdown.Item as={Link} to={`/details/${car.vin}`}>View Details</Dropdown.Item>}
			{car.archived ? <Dropdown.Item onClick={() => swalUnArchiveCar(car, data)}>Undo Archive</Dropdown.Item> : <Dropdown.Item onClick={() => swalArchiveCar(car, data)}>Archive Car</Dropdown.Item>}
			<Dropdown.Divider />
			{data.roles.includes("admin") && <Dropdown.Item onClick={() => swalDeleteCar(car, data)}>Delete Car</Dropdown.Item>}

			{data.roles.includes("admin") && <DropdownButton id="dropdown-button-drop-end" key='end' drop='end' variant="dark" title="Status">
				{data.roles.includes("admin") && <Dropdown.Item className='demo' onClick={() => changeColor(car, "demo")}>Demo</Dropdown.Item>}
				{data.roles.includes("admin") && <Dropdown.Item className='swap' onClick={() => changeColor(car, "swap")}>Swap</Dropdown.Item>}
				{data.roles.includes("admin") && <Dropdown.Item onClick={() => changeColor(car, "sold")}>Sold</Dropdown.Item>}
			</DropdownButton>}
		</DropdownButton>,
		car.cb = <color_statusb/>
	))


	let datatable = {
		columnDefs: [
			{ "visible": false, "targets": 3 }
		],
		columns: [
			// {
			// 	label:<b>Col_Stat</b>,
			// 	field: 'cb',
			// 	width: 120,
			// },
			{
				label: <b>Action</b>,
				field: 'bttn',
				sort: 'disabled',
				width: 150,
			},
			{
				label: <b>VIN</b>,
				field: 'vin',
				width: 120,
				attributes: {
					'aria-controls': 'DataTable',
					'aria-label': 'VIN',
					'car-status': "demo"
				},
			},
			{
				label: <b>Make Model</b>,
				field: 'make_model',
				width: 150,
			},
			{
				label: <b>Stock Number</b>,
				field: 'stockNum',
				width: 130,
			},
			{
				label: <b>Location</b>,
				field: 'spot_name',
				width: 130,
			},
			{
				label: <b>Status</b>,
				field: 'status',
				width: 120,
				visible: false
				
			}

		],
		rows: checked ? data.carList.filter(car => car.archived) : data.carList.filter(car => !car.archived)
	}

	return (
		<div>
			<label> 
				<Checkbox checked={checked} onChange={handleChange} />
				View Archived Cars
			</label>
			<MDBDataTable hover scrollX entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} order={['key']} />
			<color_statusb/>
		</div>
	)
}
export default TableOfCars