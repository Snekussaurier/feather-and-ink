import './App.css';
import Sidenav from './comp/Sidenav';
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './comp/Dashboard';

function App() {
  return (
    <HashRouter>
      <div className="h-screen bg-background">
          <div className=' ml-[260px] overflow-y-auto overflow-x-hidden h-screen'>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/backpack" component="" />
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
