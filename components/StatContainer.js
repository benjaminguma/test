import React from 'react';
import StatCard from './StatCard';

const StatContainer = ({ stats }) => {
	return (
		<section className='stats mt-4'>
			<div className='container'>
				<div className='div_4'>
					{stats.map((stat, index) => (
						<StatCard key={index} {...stat} />
					))}
				</div>
			</div>
		</section>
	);
};

export default StatContainer;
