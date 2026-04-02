import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import SideBar from '../SideBar'

function Layout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout