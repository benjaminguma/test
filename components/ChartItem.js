import React from 'react';
import { LineChart, Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { data } from '../public/dummy_data';
const ChartItem = ({ value, title, stroke }) => {
	return (
		<article className='chart_item bg-w p-2'>
			<div className='sp-btw mb-2 flexi'>
				<h2 className='heading_med col-g-2'>{value}</h2>
				<p className='heading_small_1 col-g-3'>{title}</p>
			</div>
			<div className='chart_box'>
				<LineChart width={435} height={240} data={data} margin={{ top: 5, left: 20, bottom: 5 }}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey='name' stroke='#b0b0b0' />
					<YAxis padding={{ right: 10 }} tickLine={false} stroke='#b0b0b0' />
					<Tooltip />
					<Line type='monotone' dataKey='pv' stroke={stroke} strokeDashArray='20 1 2' strokeWidth={3} />
					<LineChart type='monotone' dataKey='uv' stroke='#82ca9d' />
				</LineChart>
			</div>
		</article>
	);
};

export default ChartItem;
