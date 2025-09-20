import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import RightSidebar from '../components/RightSidebar';

export default function AppLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Hide right sidebar on projects page
  const isProjectsPage = location.pathname === '/projects';
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
            width: 212,
            bgcolor: theme.palette.mode === 'dark' ? '#000000' : '#FFFFFF',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Sidebar />
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
          md: isProjectsPage ? 'calc(100vw - 212px)' : 'calc(100vw - 212px)',
          lg: isProjectsPage ? 'calc(100vw - 212px)' : 'calc(100vw - 212px - 280px)'
        },
        minWidth: 0,
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }
      }}>
        <Topbar onMenuClick={handleDrawerToggle} />
        <Box sx={{ 
          flex: 1, 
          py: { xs: 2, sm: 3 }, 
          px: { xs: 1, sm: 2, md: 3 },
          overflow: 'auto'
        }} component="main">
          {children}
        </Box>
      </Box>

      {/* Right Sidebar - Hidden on mobile, tablet, and projects page */}
      <Box sx={{ 
        display: { 
          xs: 'none', 
          sm: 'none', 
          md: 'none', 
          lg: isProjectsPage ? 'none' : 'block' 
        } 
      }}>
        <RightSidebar />
      </Box>
    </Box>
  );
}


