import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import Organisation from "./pages/organisation";
import Roles from "./pages/roles";
import Subscription from "./pages/subscription";
import Plugin from "./pages/plugin";
import Branding from "./pages/branding";
import Gamification from "./pages/gamification";
import Notification from "./pages/notification";
import Myprofile from "./pages/myprofile";
import Search from "./pages/search";
import Language from "./pages/language";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="contents">
          <SideNavbar />
          <section>
            <Routes>
              <Route path="/" element={<Organisation />} exact />
              <Route path="/roles" element={<Roles />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/plugin" element={<Plugin />} />
              <Route path="/branding" element={<Branding />} />
              <Route path="/gamification" element={<Gamification />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/myprofile" element={<Myprofile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/language" element={<Language />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
