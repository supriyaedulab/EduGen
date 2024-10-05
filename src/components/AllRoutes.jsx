import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

import { Contacts } from '../pages/Contacts'
import { Teams } from '../pages/Teams'
import {QuestionGeneratorForm} from '../pages/QuetionGenerator'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/quetiongenerator" element={<QuestionGeneratorForm/>} />
    <Route path="/teams" element={<Teams/>} /> 
    <Route path="/contacts" element={<Contacts />}  />   
  </Routes>
  )
}

export  {AllRoutes}