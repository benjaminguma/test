import React from 'react';
import ChartItem from './ChartItem';

const ChartContainer = () => {
	return (
		<section className='charts '>
			<div className='container'>
				<div className='con_1_1'>
					<ChartItem title='Income in current month' value='$ 112,174' />
					<ChartItem title='Total Number of Appointment' value='5,210' stroke={'#FAC032'} />
				</div>
			</div>
		</section>
	);
};

export default ChartContainer;
