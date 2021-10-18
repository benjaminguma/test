import React from 'react';

const StatCard = ({ icon, title, count }) => {
	return (
		<div className='stat_item flexi gap-25 bg-w br'>
			<svg>
				<use xlinkHref={`/vectors/others/sprite.svg#${icon}`}></use>
			</svg>
			<div className='grid_txt_1'>
				<h3 className='heading_small_1 weit-2 cap col-g-2'>{title}</h3>
				<p className='heading_med_avg col-b'>{count}</p>
			</div>
		</div>
	);
};

export default StatCard;
