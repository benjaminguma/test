import React from 'react';
import SearchBox from './SearchBox';
import Image from 'next/image';
import dp from '../public/images/profile_img.png';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<nav className='header_nav flexi sp-btw'>
					<SearchBox />

					{/* <svg className='small_svg'>
						<use xlinkHref='/vectors/others/sprite.svg#logo'></use>
					</svg> */}

					<div className='header_info flexi gap-25'>
						<button className='btn bg-tr center-flex  noti_btn' data-count='2'>
							<svg className='small_svg_1'>
								<use xlinkHref='/vectors/others/sprite.svg#noti'></use>
							</svg>
						</button>
						<Image
							src={dp}
							className={'med_svg'}
							placeholder={'blur'}
							alt='profile_photoo'
							layout='fixed'
							quality={100}
						/>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
