import './App.css';
import { main } from './Main';
import './assets/stylesheets/style.scss';
import './assets/fabric-core-css/Fabric.scss';

import React from "react"

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

function App() {
  return (
    <div className="App" >
        {main}
    </div>
  );
}

export default App;
