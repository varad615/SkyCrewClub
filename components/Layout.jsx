import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        <div className='bg-white flex-1 p-4 overflow-y-hidden' style={{overflowY: "hidden"}}>
            <Header />
            {children}
        </div>
    </div>
  )
}

export default Layout