import React from 'react';
import sprite from '../../../Assets/imagery/svg/sidebar/sprite.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { scaleUp } from '../../../Animations';
import Link from 'next/link';

const SidebarLink = ({ title, icon, link, count }) => {
	return (
		<li className='sidebar_list_item'>
			<Link href={`/${link ? link : icon}`} activeClassName='active' passHref={true}>
				<a href='' className={`sidebar_link  cap flexi`}>
					<svg className='small_svg mr-1'>
						<use xlinkHref={sprite + `#${icon}`} />
					</svg>
					<p className='flexi gap-15'>
						<span className='heading_small  cap'> {title}</span>
						{count ? (
							<motion.span
								variants={scaleUp}
								initial={'initial'}
								animate={'final'}
								className='bg-or col-w dot center-flex smaller weit-3'>
								{count}
							</motion.span>
						) : null}
					</p>
				</a>
			</Link>
		</li>
	);
};

export default SidebarLink;
