import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import HBDLandingPage from "./views/HBDKD/LandingPage.js"
import HBDMsgPage from "./views/HBDKD/MsgForm.js"
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import CalligraphyListPage from "./views/Calligraphy/CalligraphyListPage.js"
import CalligraphyDetailPage from './views/Calligraphy/CalligraphyDetailPage.js'
import CalligraphyUploadPage from "./views/Calligraphy/CalligraphyUploadPage.js"
import CalligraphyUpdatePage from "./views/Calligraphy/CalligraphyUpdatePage.js"

import ProjectListPage from "./views/Project/ProjectListPage.js";
import ProjectDetailPage from "./views/Project/ProjectDetailPage.js";
import ProjectUploadPage from "./views/Project/ProjectUploadPage.js"
import ProjectUpdatePage from "./views/Project/ProjectUpdatePage.js"
import AboutPage from "./views/About/AboutPage.js"
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/about" component={Auth(AboutPage, null)} />

          <Route exact path="/project" component={Auth(ProjectListPage, null)} />
          <Route exact path="/projectUpload" component={Auth(ProjectUploadPage, true)} />
          <Route exact path="/project/:projectId" component={Auth(ProjectDetailPage, true)}/>
          <Route exact path="/project/update/:projectId" component={Auth(ProjectUpdatePage, true)}/>

          <Route exact path="/calligraphy" component={Auth(CalligraphyListPage, null)} />
          <Route exact path="/calligraphyUpload" component={Auth(CalligraphyUploadPage, true)} />
          <Route exact path="/calligraphy/:calligraphyId" component={Auth(CalligraphyDetailPage, true)}/>
          <Route exact path="/calligraphy/update/:calligraphyId" component={Auth(CalligraphyUpdatePage, true)}/>

          <Route exact path="/HBDKD" component={Auth(HBDLandingPage, null)} />
          <Route exact path="/HBDKD/MSG" component={Auth(HBDMsgPage, null)} />


        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
