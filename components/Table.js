import React from 'react';
import { dummyPatients } from '../public/dummy_data';

const Table = () => {
	const tableHeader = (
		<thead>
			<tr className='tr cus_thead upp'>
				<th>name</th>
				<th>email</th>
				<th>date</th>
				<th>visit time</th>
				<th>CHWs</th>
				<th>Plans</th>
				<th></th>
			</tr>
		</thead>
	);

	return (
		<section className='data_table'>
			<div className='container'>
				<div className='customer_tab bg-w grid_txt br'>
					<h3 className='heading_med cap col-g-2 data_table_title mb-1'>appointment activity</h3>
					<table className=' '>
						{tableHeader}
						<tbody>
							{dummyPatients.map((patientData, index) => (
								<TableRowDesk key={index} {...patientData} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default Table;

function TableRowDesk({ image, name, email, date, visitTime, chws, plan }) {
	return (
		<tr>
			<td>
				<div className='flexi gap-15'>
					<img src={`/images/${image}.png`} alt='_profile__image' />
					<span> {name}</span>
				</div>
			</td>
			<td>
				<span>{email}</span>
			</td>
			<td>
				<span>{date}</span>
			</td>
			<td>
				<span>{visitTime}</span>
			</td>
			<td>
				<span>{chws}</span>
			</td>
			<td>
				<span>{plan}</span>
			</td>
			<td>
				<div className='flexi gap-15'>
					<button className='bg-tr'>
						<svg className='small_svg'>
							<use xlinkHref={'/vectors/others/sprite.svg#edit'}></use>
						</svg>
					</button>
					<button className='bg-tr'>
						<svg className='small_svg'>
							<use xlinkHref={'/vectors/others/sprite.svg#del'}></use>
						</svg>
					</button>
				</div>
			</td>
		</tr>
	);
}
