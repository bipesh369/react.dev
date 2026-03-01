import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom' // 1. Import this!

function Route() {
  return (
    <>
      <Header />
      <Outlet />  {/* 2. This is where Contact/Home/About will appear */}
      <Footer />
    </>
  )
}

export default Route