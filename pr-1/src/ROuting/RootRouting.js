import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import Add from '../Component/Add/Add'
import View from '../Component/View/View'
import Detail from '../Component/Detail/Detail'
import Edit from '../Component/Edit/Edit'
import Pnf from '../Component/Pnf/Pnf'

const RootRouting = () => {
  return (
    <Router>
    <Header/>
        <Routes>
            <Route path='' element={<Add/>} />
            <Route path='view' element={<View/>} />
            <Route path='view/detail/:dtId' element={<Detail/>} />
            <Route path='edit/:edId' element={<Edit/>} />

            <Route path='*' element={<Pnf/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default RootRouting