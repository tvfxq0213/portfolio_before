import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ProjectListPage from "./views/Project/ProjectListPage.js";
import ProjectDetailPage from "./views/Project/ProjectDetailPage.js";
import ProjectUploadPage from "./views/Project/ProjectUploadPage.js"
import AboutPage from "./views/About/AboutPage.js"
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

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
          <Route exact path="/project:projectId" component={Auth(ProjectDetailPage, true)}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
