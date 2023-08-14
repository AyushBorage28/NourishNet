import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./screens/globals/Topbar";

import Dashboard from "./screens/dashboard";
import Team from "./screens/team";
import Invoices from "./screens/invoices";
import Contacts from "./screens/contacts";
import Bar from "./screens/bar";
import Form from "./screens/forms";
import Line from "./screens/line";
import Pie from "./screens/pie";
import Horeca from "./screens/horeca";
import Geography from "./screens/geography";
import Sidebar from "./screens/globals/Sidebar";

import Calendar from "./screens/calendar";
import Home from "./screens/Home";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // const location = useLocation();
  const allowedRoutes = [
    "/dashboard",
    "/team",
    "/contacts",
    "/invoices",
    "/form",
    "/horeca",
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
    <Router>
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
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />

              <Route path="/contacts" element={<Contacts />} />

              <Route path="/invoices" element={<Invoices />} />

              <Route path="/form" element={<Form />} />
     <Route path="/horeca" element={<Horeca/>} />
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
    </Router>
  );
};

export default App;