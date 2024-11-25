import React from 'react'
import Main from './components/Section/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/' element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App