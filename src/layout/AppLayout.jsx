import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery, Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import RightSidebar from '../components/RightSidebar';
import MobileNotifications from '../components/MobileNotifications';

export default function AppLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  // Hide right sidebar on projects page
  const isProjectsPage = location.pathname === '/projects';
  // Hide notifications on tables page
  const isTablesPage = location.pathname === '/tables';
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNotificationToggle = () => {
    setNotificationOpen(!notificationOpen);
  };
  
  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
      height: { xs: '100vh', sm: '100vh', md: '100vh', lg: '100vh' },
      position: 'relative',
      left: { xs: 0, sm: 0, md: 0, lg: 0 },
      top: { xs: 0, sm: 0, md: 0, lg: 0 }
    }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#FFFFFF',
            borderRight: '1px solid rgba(55, 65, 81, 0.3)',
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid rgba(55, 65, 81, 0.1)'
        }}>
          <Typography variant="h6" sx={{ flex: 1, color: 'text.primary', fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <Sidebar />
        </Box>
      </Drawer>

      {/* Desktop Sidebar */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Sidebar />
      </Box>

      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        width: { 
          xs: '100%', 
          sm: '100%',
          md: (isProjectsPage || isTablesPage) ? 'calc(100vw - 212px)' : 'calc(100vw - 212px)',
          lg: (isProjectsPage || isTablesPage) ? 'calc(100vw - 212px)' : 'calc(100vw - 212px - 280px)'
        },
        minWidth: 0,
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }
      }}>
        <Topbar onMenuClick={handleDrawerToggle} onNotificationClick={handleNotificationToggle} hideNotifications={isTablesPage} isTablesPage={isTablesPage} />
        <Box sx={{ 
          flex: 1, 
          py: { xs: 2, sm: 3 }, 
          px: { xs: 1, sm: 2, md: 3 },
          overflow: 'auto'
        }} component="main">
          {children}
        </Box>
      </Box>

      {/* Mobile Notification Drawer - Hidden on tables page */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={notificationOpen && !isTablesPage}
        onClose={handleNotificationToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#FFFFFF',
            borderLeft: '1px solid rgba(55, 65, 81, 0.3)',
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid rgba(55, 65, 81, 0.1)'
        }}>
          <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
            Notifications
          </Typography>
          <IconButton onClick={handleNotificationToggle} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <MobileNotifications />
        </Box>
      </Drawer>

      {/* Right Sidebar - Hidden on mobile, tablet, projects page, and tables page */}
      <Box sx={{ 
        display: { 
          xs: 'none', 
          sm: 'none', 
          md: 'none', 
          lg: (isProjectsPage || isTablesPage) ? 'none' : 'block' 
        } 
      }}>
        <RightSidebar />
      </Box>
    </Box>
  );
}


