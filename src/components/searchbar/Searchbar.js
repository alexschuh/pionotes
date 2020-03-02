import React from 'react';
import './Searchbar.css';

class Searchbar extends React.Component {
    render() {
        return(
            <input className="searchbar" placeholder="I am looking for..." />
        )
    }
}

export default Searchbar;