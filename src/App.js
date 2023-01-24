import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainheader from "./components/mainheader/Mainheader";
import Home from "./components/pages/home/Home";
import Jobs from "./components/pages/jobs/Jobs";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import { theme } from "./components/theme/theme";
import { ThemeProvider } from "@mui/material";
import Dashboard from "./components/pages/dashboard/Dashboard";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Toaster } from "react-hot-toast";
import CandidateProfile from "./components/pages/dashboard/candidate/CandidateProfile";
import JobInfo from "./components/pages/dashboard/JobInfo/JobInfo";
import PrivateRoutes from "./route/PrivateRoutes";
import { JobContext } from "./context/Context";
import JobForm from "./components/pages/jobs/applicationform/JobForm";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  const [jobdata, setJobData] = useState([]);
  const [allJobdata, setAllJobData] = useState([]);

  return (
    <BrowserRouter>
      <Toaster />
      <JobContext.Provider
        value={{ jobdata, setJobData, allJobdata, setAllJobData }}
      >
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Mainheader />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoutes />}>
                <Route path="jobs/application_form" element={<JobForm />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/job_info" element={<JobInfo />} />
                <Route path="/job_info/:jobId" element={<JobInfo />} />
                <Route path="/candidate" element={<CandidateProfile />} />
                <Route
                  path="/candidate/:candidateId"
                  element={<CandidateProfile />}
                />
              </Route>
            </Routes>
          </ThemeProvider>
        </LocalizationProvider>
      </JobContext.Provider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
