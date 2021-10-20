import { useContext } from 'react';
import { LineChart, Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { data } from '../public/dummy_data';
import { Ctx } from '../layout';
const ChartItem = ({ value, title, stroke }) => {
	const { width } = useContext(Ctx);
	const computeChartWidth = (width) => {
		if (width > 900) return 0.34 * width;
		if (width > 700) return 0.6 * width;
		return 0.7 * width;
	};
	const chartWidth = computeChartWidth(width);
	return (
		<article className='chart_item bg-w p-2 br'>
			<div className='sp-btw mb-2 flexi'>
				<h2 className='heading_med col-g-2'>{value}</h2>
				<p className='heading_small_1 col-g-3'>{title}</p>
			</div>
			<div className='chart_box'>
				<LineChart
					width={chartWidth}
					height={0.6 * chartWidth}
					data={data}
					margin={{ top: 5, left: 20, bottom: 5 }}>
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
