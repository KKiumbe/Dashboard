import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './global/topbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/conctacts';
import Invoices from './scenes/invoices';

import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
//import Faq from './scenes/faq';
import Geography from './scenes/geography';
import Calender from './scenes/calender';
import SidebarAction from './global/sidebar';
//import { Sidebar } from 'react-pro-sidebar';
import './App.css';
import Form from './scenes/form';
import FAQ from './scenes/faq';



  function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Topbar setIsSidebar={setIsSidebar} />
          <div className="app">
            <SidebarAction isSidebar={isSidebar} />
            <main className="content">
             
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form/>} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/calendar" element={<Calender/>} />
                <Route path="/geography" element={<Geography/>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
  
  export default App;