import React from 'react';
import { AppBar, Toolbar, IconButton, Box, InputBase, Typography, Breadcrumbs, alpha, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchRounded';
import NotificationsIcon from '@mui/icons-material/NotificationsRounded';
import Brightness4Icon from '@mui/icons-material/DarkModeRounded';
import Brightness7Icon from '@mui/icons-material/LightModeRounded';
import GridViewIcon from '@mui/icons-material/GridViewRounded';
import RefreshIcon from '@mui/icons-material/RefreshRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { useColorMode } from '../theme/ThemeProvider';
import { useLocation } from 'react-router-dom';

export default function Topbar({ onMenuClick, onNotificationClick, hideNotifications = false, isTablesPage = false }) {
  const { mode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const getBreadcrumb = () => {
    if (location.pathname === '/') return 'Dashboards / Default';
    if (location.pathname === '/tables') return 'Dashboards / Tables';
    if (location.pathname === '/ecommerce') return 'Dashboards / eCommerce';
    if (location.pathname === '/projects') return 'Dashboards / Projects';
    if (location.pathname === '/courses') return 'Dashboards / Online Courses';
    return 'Dashboards / Default';
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      color="transparent" 
      sx={{ 
        height: { xs: 56, sm: 64, md: 68 },
        left: { xs: 0, sm: 0, md: 212 },
        right: { xs: 0, sm: 0, md: isTablesPage ? 0 : 280, lg: isTablesPage ? 0 : 280 },
        top: 0,
        padding: { xs: '12px 16px', sm: '16px 20px', md: '20px 28px' },
        gap: { xs: 0, sm: 0, md: 312 },
        borderBottom: '1px solid rgba(55, 65, 81, 0.3)',
        backdropFilter: 'saturate(180%) blur(6px)',
        bgcolor: 'background.default',
        width: { xs: '100%', sm: '100%', md: 'auto' }
      }}
    >
      <Toolbar sx={{ gap: 2, justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onMenuClick}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'text.secondary' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
              {getBreadcrumb()}
            </Typography>
          </Breadcrumbs>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
          {/* Mobile Search Icon */}
          <IconButton aria-label="search" sx={{ 
            display: { xs: 'flex', sm: 'none' },
            color: 'text.primary',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }
          }}>
            <SearchIcon />
          </IconButton>
          
          {/* Desktop Search Bar */}
          <Box sx={{
            px: { xs: 1, sm: 1.5 },
            py: { xs: 0.5, sm: 0.75 },
            display: { xs: 'none', sm: 'flex' }, 
            alignItems: 'center', 
            gap: 1,
            bgcolor: (t) => alpha(t.palette.text.primary, 0.04),
            borderRadius: 999,
            width: { xs: 120, sm: 200, md: 300 },
          }}>
            <SearchIcon fontSize="small" />
            <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} sx={{ flex: 1 }} />
          </Box>
          
          <IconButton aria-label="grid view" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <GridViewIcon />
          </IconButton>
          
          <IconButton aria-label="toggle theme" onClick={toggleColorMode} sx={{ 
            color: 'text.primary',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }
          }}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          
          <IconButton aria-label="refresh" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <RefreshIcon />
          </IconButton>
          
          {!hideNotifications && (
            <IconButton 
              aria-label="notifications" 
              onClick={onNotificationClick}
              sx={{ 
                color: 'text.primary',
                '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' },
                position: 'relative'
              }}
            >
              <NotificationsIcon />
              {/* Notification badge */}
              <Box sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#ef4444',
                border: '2px solid white'
              }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}


