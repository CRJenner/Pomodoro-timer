import { useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import Timer from './components/Timer';
import SettingContext from './Context/SettingContext';


function App() {
  const [showSettings, setShowSettings]=useState(true)
 
  return (
    <div className="App">
      <main>
        <SettingContext.Provider value={{
meditationMinutes:5,
        }}>
           {showSettings ? <Settings/> : <Timer/>}
        </SettingContext.Provider>
       
      </main>
     
    </div>
  );
}

export default App;
