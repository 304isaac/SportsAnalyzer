import React from "react";
import './App.css';
import NCAAF from './pages/ncaaf'
import Home from './pages/Home'
import Matchups from './pages/Matchups'
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom"
import Injuries from "./pages/Injuries";
import Stats from "./pages/Stats";
import Search from "./pages/Search";
import Performance from "./pages/Performance";
import NCAAM from "./pages/ncaam"
import NBA from "./pages/nba"
import NFL from "./pages/nfl"
import View from "./pages/View"
import Login from "./components/Login"
import Signup from "./components/Signup";




function App() {
  return (
    <div className="App">   
      <div className="AppGlass">
        <Sidebar />

        

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/matchups" element={<Matchups />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/injuries" element={<Injuries />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/nfl" element={<NFL />} />
              <Route path="/nba" element={<NBA />} />
              <Route path="/ncaaf" element={<NCAAF />} />
              <Route path="/ncaam" element={<NCAAM />} />
              <Route path="/search/:repo" element={ <Search />} />
              <Route path="/view/:repo" element={ <View />} />
              <Route path="/login" element={ <Login />} />
              <Route path="/signup" element={ <Signup />} />
              <Route path="/login/:repo" element={ <Login />} />
            </Routes>
          </div>


      </div>
    </div>
  );
}

export default App;