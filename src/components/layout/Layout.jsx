import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
  const {pathname} = useLocation()
  React.useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout