import React from 'react';
import Link from 'next/link';

const SidebarLink = ({ title, icon, link, count }) => {
	return (
		<li className='sidebar_list_item'>
			<Link href={`/${link ? link : icon}`} passHref={true}>
				<a href='' className={`sidebar_link  cap flexi`}>
					<svg className='small_svg mr-1'>
						<use xlinkHref={`/vectors/sidebar icons/sprite.svg#${icon}`} />
					</svg>
					<p className='flexi gap-15'>
						<span className=' cap weit-2'> {title}</span>
					</p>
				</a>
			</Link>
		</li>
	);
};

export default SidebarLink;
