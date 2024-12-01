import React from 'react'
import Main from './components/Section/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Section/Header'
import Nav from './components/Section/Nav'
import Login from './components/User/Login'
import Join from './components/User/Join'
import Joindone from './components/User/Joindone'
import Mypage from './components/Mypage/Mypage'
import Scrap from './components/Scrap/Scrap'
import Filter from './components/FIlter/Filter'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />
                <Route path='/joinend' element={<Joindone />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/scrap' element={<Scrap />} />
                <Route path='/filter' element={<Filter />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default App