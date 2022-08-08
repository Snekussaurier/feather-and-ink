import './App.css';
import Sidenav from './comp/Sidenav';
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './comp/Dashboard';
import Backpack from './comp/Backpack';
import {useEffect, useState} from 'react'

function App() {

  const [character, setCharacter] = useState(null)

  useEffect(() => {
    if(character === null){
      window.api.getCharacter().then((results) => {
          setCharacter(results)
      });}
      else{
        async function updateCharacter() {
          await window.api.updateCharacter(character)
        }
        updateCharacter();
      };
  })

  return (
    <HashRouter>
      <div className="h-screen bg-background">
          <div className=' ml-[260px] overflow-y-auto overflow-x-hidden h-screen'>
            <Routes>
              <Route path="/" element={<Dashboard character={character} setCharacter={setCharacter}/>} />
              <Route path="/backpack" element={<Backpack/>} />
              <Route path="/leveling" component=""/>
              <Route path="/settings" component="" />
            </Routes>
          </div>
          <Sidenav/>
      </div>
    </HashRouter>
  );
}

export default App;
