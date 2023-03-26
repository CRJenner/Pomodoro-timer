import { useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import Timer from './components/Timer';


function App() {
  const [showSettings, setShowSettings]=useState(true)
  return (
    <div className="App">
      <main>
        {showSettings ? <Settings/> : <Timer/>}
      </main>
     
    </div>
  );
}

export default App;
