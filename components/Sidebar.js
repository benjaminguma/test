import { Fragment, useContext, useEffect } from 'react';
import Link from 'next/link';
import SidebarLink from './SidebarLink';
import { Ctx } from '../layout';
import UseToggle from '../hooks/UseToogle';
import { motion, AnimatePresence } from 'framer-motion';

const slideIn = {
	initial: {
		x: -1000,
	},
	final: {
		x: 0,
		transition: {
			type: 'spring',
			ease: 'linear',
			duration: 0.04,
		},
	},
};
const Sidebar = ({ data }) => {
	const { width } = useContext(Ctx);
	const breakpoint = 900;
	const _ = UseToggle(true);
	useEffect(() => {
		// if (breakpoint > width && !_.isOpen) return _.open ();
		if (width > breakpoint && !_.isOpen) return _.open();
		// if (width < breakpoint && _.isOpen) return _.close();
	}, [width]);
	useEffect(() => {
		if (breakpoint > width) return _.close();
		if (width > breakpoint) _.open();
	}, []);

	const toog = () => width <= breakpoint && _.close();
	return (
		<AnimatePresence>
			{_.isOpen && (
				<motion.div
					variants={slideIn}
					initial='initial'
					animate='final'
					exit='initial'
					className='sidebar bg-w'>
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
						{JSON.stringify(_.isOpen)}
						{data.map((details, index) => (
							<SidebarLink {...details} key={index} />
						))}
					</ul>
				</motion.div>
			)}
			{_.isOpen && width < breakpoint && (
				<motion.div className={'backdrop'} onClick={_.close} animate={{ opacity: 1 }} />
			)}
		</AnimatePresence>
	);
};

export default Sidebar;
