
import './App.css'

import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Trending from './pages/Trending'
import TopRated from './pages/TopRated'
import NewReleases from './pages/NewReleases'
import Upcoming from './pages/Upcoming'

function App() {

  return( 
       <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </>
    
  )
  
}

export default App
