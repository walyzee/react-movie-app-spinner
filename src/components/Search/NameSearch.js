import React from 'react';

const NameSearch = ({value = '', onChange = () => {}}) => (
    <div className="search-name">
        <input className="search-name-text" type="text"  value={value} placeholder='Type the movie title...' onChange={(e) => {onChange(e.target.value)}} />
    </div>
)

export default NameSearch;