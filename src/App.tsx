import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { useRef } from 'react'
import { AboutPage } from './pages/about/AboutPage'
import { ContactPage } from './pages/contact/ContactPage'

function App() {
  const appContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: appContainerRef,
  })
  const opacity = useTransform(scrollYProgress, [1, 0.25], [0.25, 1])

  return(
    <motion.div 
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        opacity,
        overflow: "auto",
      }}
      ref={appContainerRef}
    >
      <Routes>
        {routes.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={item.element}>
            </Route>
          )
        })}
      </Routes>
      <AboutPage appContainerRef={appContainerRef}></AboutPage>
      <ContactPage></ContactPage> 
    </motion.div>
  )
}

export default App
