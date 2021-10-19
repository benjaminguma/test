import React from 'react';

const SearchBox = ({ value, onChange, placeholder, readonly = false }) => {
	return (
		<div className='search br'>
			<div className='search_input  bg-w   flexi' style={{ borderRadius: '100px', overflow: 'hidden' }}>
				<input
					type='text'
					placeholder={placeholder ? placeholder : 'search...'}
					className=' form_input '
					value={value}
					onChange={(e) => onChange(e.target.value)}
					readOnly={readonly}
				/>
				<svg style={{ width: '2rem', height: '2rem', margin: '0 10px' }}>
					<use xlinkHref={'/vectors/others/sprite.svg#search'} />
				</svg>
			</div>
		</div>
	);
};

export default SearchBox;
