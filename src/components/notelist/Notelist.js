import React from 'react';
import './Notelist.css';
import Note from '../note/Note';

class Notelist extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            note:['Visa Proposal Notes', 'Startup as a Service Thoughts', 'Hockey']
        }
    }
    render() {
        return(
            <div>
                <ul>
                    {this.state.note.map(note => <li>{note}</li>)}
                </ul>
            </div>
        )
    }
}

export default Notelist;