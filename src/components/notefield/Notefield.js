import React from 'react';
import './Notefield.css';

class Notefield extends React.Component {
    render() {
        return(
            <form method="post"> 
                <div>  
                    <textarea placeholder='I am trying to remember something important here...' className="notefield"></textarea> 	
                    <input className="button notefieldbutton" type="submit" value="Senden" />
                </div> 
            </form> 
        )
    }
}

export default Notefield;