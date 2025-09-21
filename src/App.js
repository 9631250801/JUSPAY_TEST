import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';

// Placeholder components for missing routes
const ProfileOverview = () => <Dashboard />;
const ProfileProjects = () => <Tables />;
const ProfileCampaigns = () => <Dashboard />;
const ProfileDocuments = () => <Tables />;
const ProfileFollowers = () => <Dashboard />;
const Profile = () => <Dashboard />;
const Account = () => <Tables />;
const Corporate = () => <Dashboard />;
const Blog = () => <Tables />;
const Social = () => <Dashboard />;

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
            
            {/* Profile routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/overview" element={<ProfileOverview />} />
            <Route path="/profile/projects" element={<ProfileProjects />} />
            <Route path="/profile/campaigns" element={<ProfileCampaigns />} />
            <Route path="/profile/documents" element={<ProfileDocuments />} />
            <Route path="/profile/followers" element={<ProfileFollowers />} />
            
            {/* Other page routes */}
            <Route path="/account" element={<Account />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/social" element={<Social />} />
            
            {/* Fallback route */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
