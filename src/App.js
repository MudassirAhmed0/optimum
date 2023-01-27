import * as React from "react";
import "./index.css";
import Layout from './components/layout/Layout'
import NewPage1  from './pages/NewPage1'
import NewPage2  from './pages/NewPage2'
import NewPage3  from './pages/NewPage3'
import NewPage4  from './pages/NewPage4'
import LoginModal from './components/modal/LoginModal'

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"; 
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";

function App(props) {
 
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/new-page-1"
            element={
              <Layout>
                <NewPage1 />
              </Layout>
            }
          />
          <Route
            path="/new-page-2"
            element={
              <Layout>
                <NewPage2 />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <NewPage3 />
              </Layout>
            }
          />
          <Route
            path="/new-page-3"
            element={
              <Layout>
                <NewPage4 />
              </Layout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Layout>
                <PrivacyPolicy />
              </Layout>
            }
          />
          <Route
            path="/terms-condition"
            element={
              <Layout>
                <TermsCondition />
              </Layout>
            }
          />
        </Routes>
      </Router>
      <LoginModal />
    </>
  );
}


export default App;
