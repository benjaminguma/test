import React from 'react';
import Link from 'next/link';
import SidebarLink from './sidebarLink';

const Sidebar = ({ data }) => {
	return (
		<div className='sidebar bg-w'>
			<div className='u-center'>
				<Link href='/dashboard'>
					<a>
						<svg className='sidebar_logo '>
							<use xlinkHref={'/vectors/others/sprite.svg#logo'} />
						</svg>
					</a>
				</Link>
			</div>
			<ul className='sidebar_list mb-2'>
				{data.map((details, index) => (
					<SidebarLink {...details} key={index} />
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
