import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import {Homepage} from './components/Homepage'
import {Aboutpage} from './components/Aboutpage'
import {Blogpage} from './components/Blogpage'
import {Notfoundpage} from './components/Notfoundpage'

const App =()=> {
    return (
        <div>
            <header>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/blog"}>Blog</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </header>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/about"} element={<Aboutpage/>}/>
                <Route path={"/blog"} element={<Blogpage/>}/>
                <Route path={"*"} element={<Notfoundpage/>}/>
            </Routes>
        </div>
    );
}

export default App;
