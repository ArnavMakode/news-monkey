import React, {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'

const App = () => {
  const [searchTerm, setSearch] = useState('')
  return (
    <Router>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route index element={<News key="general" category="general"/>}/>
        <Route path='/business' element={<News key="business" category="business"/>}/>
        <Route path='/entertainment' element={<News key="enertainment" category="entertainment"/>}/>
        <Route path='/health' element={<News key="health" category="health"/>}/>
        <Route path='/science' element={<News key="science" category="science"/>}/>
        <Route path='/sports' element={<News key="sports" category="sports"/>}/>
        <Route path='/technology' element={<News key="technology" category="technology"/>}/>
        <Route path='/search/:searchTerm' element={<News key={`search${searchTerm}`} category="search"/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
