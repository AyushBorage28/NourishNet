import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./screens/globals/Topbar";

import ProDashboard from "./screens/prodashboard";
import Dashboard from "./screens/dashboard";
import Team from "./screens/team";
import Invoices from "./screens/invoices";
import Contacts from "./screens/contacts";
import Bar from "./screens/bar";
import AddHoreca from "./screens/addhoreca";
import Line from "./screens/line";
import Pie from "./screens/pie";

import Geography from "./screens/geography";
import Sidebar from "./screens/globals/Sidebar";

import Calendar from "./screens/calendar";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Horeca from "./screens/Horeca";
import PremiumFeatures from "./screens/premium";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const location = useLocation();
  const allowedRoutes = [
    "/prodashboard",
    "/dashboard",
    "/team",
    "/contacts",
    "/invoices",
    "/premium",
    "/form",
    "/addhoreca",
    "/listHoreca",
    "/bar",
    "/pie",
    "/line",
    "/calendar",
    "/geography",
  ];
  const shouldDisplaySidebarAndTopbar = allowedRoutes.includes(
    location.pathname
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* reset the css to default */}
        <div className="app">
          {shouldDisplaySidebarAndTopbar && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {shouldDisplaySidebarAndTopbar && (
              <Topbar setIsSidebar={setIsSidebar} />
            )}

            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/premium" element={<PremiumFeatures />} />
              <Route path="/prodashboard" element={<ProDashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />

              <Route path="/contacts" element={<Contacts />} />

              <Route path="/invoices" element={<Invoices />} />

              <Route path="/addhoreca" element={<AddHoreca />} />
              <Route path="/listHoreca" element={<Horeca />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />

              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />

              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
