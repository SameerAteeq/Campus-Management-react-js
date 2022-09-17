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
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Toaster } from 'react-hot-toast';
import CandidateProfile from './components/pages/dashboard/candidate/CandidateProfile'
import JobInfo from './components/pages/dashboard/JobInfo/JobInfo'
import PrivateRoutes from './route/PrivateRoutes'

const App = () => {

  return (
    <BrowserRouter>
      <Toaster />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Mainheader />} >
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/jobs' element={<Jobs />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path='/dashboard/*' element={<Dashboard />} />
              <Route path='/job_info' element={<JobInfo />} />
              <Route path='/candidate' element={<CandidateProfile />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </LocalizationProvider>
    </BrowserRouter >
  )
}

export default App
