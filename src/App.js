import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mainheader from './components/mainheader/Mainheader'
import About from './components/pages/about/About'
import Home from './components/pages/home/Home'
import Jobs from './components/pages/jobs/Jobs'
import Login from './components/pages/login/Login'
import Signup from './components/pages/signup/Signup'
import { theme } from './components/theme/theme'
import { ThemeProvider } from '@mui/material'
import Dashboard from './components/pages/dashboard/Dashboard'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <LocalizationProvider dateAdatper={AdapterDateFns}> */}
        <Routes>
          <Route path='/' element={<Mainheader />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
        {/* </LocalizationProvider> */}
      </ThemeProvider>
    </BrowserRouter >
  )
}

export default App
