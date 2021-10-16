import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLink from './sidebarLink';
import sprite from '../../../Assets/imagery/svg/sprite.svg';
import { motion } from 'framer-motion';
const variant = {
	initial: {
		scale: 0,
		rotate: 350,
		pathLength: 0,
	},
	final: {
		pathLength: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const variant2 = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};
const Sidebar = ({ data }) => {
	return (
		<div className='sidebar bg-pri'>
			<div className='u-center'>
				<Link to='/dashboard'>
					<svg className='sidebar_logo col-w'>
						<use xlinkHref={sprite + '#logo1'} />
					</svg>
				</Link>
			</div>
			<ul className='sidebar_list mb-2'>
				{data.map((details, index) => (
					<SidebarLink {...details} key={index} />
				))}
			</ul>
			<div className='sidebar_base u-center'>
				<div className='contact_us bg-w-1 grid_txt br'>
					<h2 className='heading_small_1 cap'> need support?</h2>
					<p className='heading_small weit-2 col-pri'> chat with us </p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
