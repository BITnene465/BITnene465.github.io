import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="app-shell min-h-screen">
      <Navbar />
      <main className="page-wrapper py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
