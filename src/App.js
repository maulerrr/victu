import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ExercisesPage from "./pages/Exercises";
import PersonalPage from "./pages/personalPage";
import TipsPage from "./pages/Tips";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MyProgram  from "./pages/MyProgram";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/tips' element={<TipsPage/>}/>
              <Route path='/exercise' element={<ExercisesPage/>}/>
              <Route path='/personal' element={<PersonalPage/>}/>
              <Route path='/reg' element={<RegistrationPage/>}/>
              <Route path='/log' element={<LoginPage/>}/>
              <Route path='/program' element={<MyProgram/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
