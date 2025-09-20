import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/ecommerce" element={<Dashboard />} />
            <Route path="/projects" element={<Tables />} />
            <Route path="/courses" element={<Tables />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
