import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/globals/Topbar";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/forms";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Sidebar from "./scenes/globals/Sidebar";

import Calendar from "./scenes/calendar";

import HomeScreen from "./scenes/HomeScreen";
import Login from "./scenes/Login";
import Signup from "./scenes/Signup";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const allowedRoutes = [
    "/dashboard",
    "/team",
    "/contacts",
    "/invoices",
    "/form",
    "/faq",
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
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />

              <Route path="/contacts" element={<Contacts />} />

              <Route path="/invoices" element={<Invoices />} />

              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
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