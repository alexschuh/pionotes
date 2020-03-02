import React from 'react';
import './App.css';
import Newnote from '../newnote/Newnote';
import Notefield from '../notefield/Notefield';
import Notelist from '../notelist/Notelist';
import Searchbar from '../searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <div className="notelist-wrapper">
        <div class="pionotes-name">Pionotes</div>
        <Searchbar />
        <Newnote />
        <div className="allnotes">Notes</div>
        <Notelist />
      </div>
      <Notefield />
    </div>
  );
}

export default App;
