// @flow
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import DigitalServicesPage from '../pages/DigitalServicesPage'
import SucessPage from '../pages/SucessPage'

const AppRouter = (): any => {
  return (
    <Routes>
      <Route path="/" element={<DigitalServicesPage />} />
      <Route path="sucess" element={<SucessPage />} />
    </Routes>
  )
}

export default AppRouter
