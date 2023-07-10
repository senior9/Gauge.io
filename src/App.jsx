
import { Outlet } from 'react-router-dom'
import './App.css'
import BannerSection from './Components/Section/BannerSection/BannerSection'

function App() {
  

  return (
    <>
    <BannerSection></BannerSection>
    <Outlet></Outlet>
    </>
  )
}

export default App
