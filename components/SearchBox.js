import React from 'react';
import sprite from '../../../Assets/imagery/svg/sprite.svg';

const SearchBox = ({value, onChange, placeholder, readonly = false}) => {
  return (
    <div className="search br">

      <div
        className="search_input  bg-w   bord-g-1   flexi"
        style={{borderRadius: '7px', overflow: 'hidden'}}
      >
        <input
          type="text"
          placeholder={placeholder ? placeholder : 'search products...'}
          className=" form_input "
          value={value}
          onChange={e => onChange (e.target.value)}
          readOnly={readonly}
        />
        <svg style={{width: '3rem', height: '3rem', margin: '0 8px'}}>
          <use xlinkHref={sprite + `#search`} />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
