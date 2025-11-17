import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import { pageTransition, pageTransitionSpring } from '../../lib/motion'
import AmbientMesh from './AmbientMesh'

function Layout() {
  const location = useLocation()

  return (
    <div className="app-shell min-h-screen">
      <AmbientMesh />
      <div className="relative z-10 flex min-h-screen flex-1 flex-col">
        <Navbar />
        <main className="page-wrapper py-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransitionSpring}
              className="min-h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
