import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Collapse, Divider, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/SpaceDashboardRounded';
import TableChartIcon from '@mui/icons-material/TableChartRounded';
import ExpandLessIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import PersonIcon from '@mui/icons-material/PersonRounded';
import CampaignIcon from '@mui/icons-material/CampaignRounded';
import DocumentIcon from '@mui/icons-material/DescriptionRounded';
import AccountIcon from '@mui/icons-material/AccountCircleRounded';
import { NavLink } from 'react-router-dom';

const favoritesItems = [
  { label: 'Overview', icon: <DashboardIcon />, to: '/' },
  { label: 'Projects', icon: <TableChartIcon />, to: '/projects' },
];

const dashboardItems = [
  { label: 'Default', icon: <DashboardIcon />, to: '/' },
  { label: 'eCommerce', icon: <TableChartIcon />, to: '/ecommerce' },
  { label: 'Projects', icon: <TableChartIcon />, to: '/projects' },
  { label: 'Online Courses', icon: <TableChartIcon />, to: '/courses' },
];

const userProfileItems = [
  { label: 'Overview', icon: <DashboardIcon />, to: '/profile/overview' },
  { label: 'Projects', icon: <TableChartIcon />, to: '/profile/projects' },
  { label: 'Campaigns', icon: <CampaignIcon />, to: '/profile/campaigns' },
  { label: 'Documents', icon: <DocumentIcon />, to: '/profile/documents' },
  { label: 'Followers', icon: <PersonIcon />, to: '/profile/followers' },
];

const pagesItems = [
  { label: 'User Profile', icon: <PersonIcon />, to: '/profile', hasSubItems: true, subItems: userProfileItems, active: true, hasDropdown: true },
  { label: 'Overview', icon: <DashboardIcon />, to: '/profile/overview', active: true },
  { label: 'Projects', icon: <TableChartIcon />, to: '/profile/projects' },
  { label: 'Campaigns', icon: <CampaignIcon />, to: '/profile/campaigns' },
  { label: 'Documents', icon: <DocumentIcon />, to: '/profile/documents' },
  { label: 'Followers', icon: <PersonIcon />, to: '/profile/followers' },
  { label: 'Account', icon: <AccountIcon />, to: '/account' },
  { label: 'Corporate', icon: <AccountIcon />, to: '/corporate' },
  { label: 'Blog', icon: <DocumentIcon />, to: '/blog' },
  { label: 'Social', icon: <CampaignIcon />, to: '/social' },
];

export default function Sidebar() {
  const theme = useTheme();
  const [favoritesOpen, setFavoritesOpen] = useState(true);
  const [dashboardsOpen, setDashboardsOpen] = useState(true);
  const [pagesOpen, setPagesOpen] = useState(true);

  const NavSection = ({ title, items, open, onToggle }) => (
    <Box>
      <ListItemButton onClick={onToggle} sx={{ px: 2, py: 1 }}>
        <ListItemText 
          primary={title} 
          primaryTypographyProps={{ 
            variant: 'subtitle2', 
            fontWeight: 700, 
            color: theme.palette.mode === 'dark' ? '#9CA3AF' : '#1F2937',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            fontSize: '12px'
          }} 
        />
        {open ? <ExpandLessIcon sx={{ color: theme.palette.mode === 'dark' ? '#9CA3AF' : '#1F2937', fontSize: '16px' }} /> : <ExpandMoreIcon sx={{ color: theme.palette.mode === 'dark' ? '#9CA3AF' : '#1F2937', fontSize: '16px' }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense>
          {items.map((item) => (
            <ListItemButton
              key={item.to}
              component={NavLink}
              to={item.to}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.25,
                color: theme.palette.mode === 'dark' ? '#9ca3af' : '#374151',
                bgcolor: item.active ? (theme.palette.mode === 'dark' ? '#374151' : '#f3f4f6') : 'transparent',
                color: item.active ? (theme.palette.mode === 'dark' ? 'white' : '#374151') : (theme.palette.mode === 'dark' ? '#9ca3af' : '#374151'),
                borderLeft: item.active ? '3px solid #3b82f6' : 'none',
                '&.active': { 
                  bgcolor: theme.palette.mode === 'dark' ? '#374151' : '#f3f4f6',
                  color: theme.palette.mode === 'dark' ? 'white' : '#374151',
                  borderLeft: '3px solid #3b82f6',
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.mode === 'dark' ? 'white' : '#374151',
                  },
                },
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: 36, 
                color: item.active ? 'white' : (theme.palette.mode === 'dark' ? '#9CA3AF' : '#6B7280')
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
              {item.hasDropdown && (
                <ExpandMoreIcon sx={{ 
                  color: item.active ? 'white' : (theme.palette.mode === 'dark' ? '#9CA3AF' : '#6B7280'), 
                  fontSize: '16px' 
                }} />
              )}
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  );

  return (
    <Box 
      component="nav" 
      sx={{ 
        width: 212, 
        height: { xs: '100vh', sm: '100vh', md: '100vh', lg: '100vh' },
        left: 0,
        top: 0,
        padding: '20px 16px',
        gap: '16px',
        borderRight: '1px solid rgba(55, 65, 81, 0.3)',
        flexShrink: 0, 
        display: { xs: 'none', md: 'block' },
        bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#FFFFFF',
        overflowY: 'auto'
      }} 
      aria-label="Sidebar"
    >
      <Toolbar sx={{ px: 3, py: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ 
          width: 32, 
          height: 32, 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, #3B82F6, #F59E0B)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          fontWeight: 600
        }}>
          B
        </Box>
        <Typography variant="h6" fontWeight={600} color="text.primary">
          ByeWind
        </Typography>
      </Toolbar>
      
      <Box sx={{ px: 1 }}>
        <NavSection 
          title="Favorites" 
          items={favoritesItems} 
          open={favoritesOpen} 
          onToggle={() => setFavoritesOpen(!favoritesOpen)} 
        />
        
        <Divider sx={{ my: 1 }} />
        
        <NavSection 
          title="Dashboards" 
          items={dashboardItems} 
          open={dashboardsOpen} 
          onToggle={() => setDashboardsOpen(!dashboardsOpen)} 
        />
        
        <Divider sx={{ my: 1 }} />
        
        <Box sx={{ mb: 2 }}>
          <ListItemButton onClick={() => setPagesOpen(!pagesOpen)} sx={{ borderRadius: 1, mx: 1, px: 2, py: 1 }}>
            <ListItemText 
              primary="PAGES" 
              primaryTypographyProps={{ 
                variant: 'subtitle2', 
                fontWeight: 700, 
                color: 'text.primary',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                fontSize: '12px'
              }} 
            />
            {pagesOpen ? <ExpandLessIcon sx={{ color: 'text.primary', fontSize: '16px' }} /> : <ExpandMoreIcon sx={{ color: 'text.primary', fontSize: '16px' }} />}
          </ListItemButton>
          <Collapse in={pagesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding dense>
              {/* User Profile with sub-items */}
              <Box>
                <ListItemButton
                  component={NavLink}
                  to="/profile"
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    my: 0.25,
                    color: theme.palette.mode === 'dark' ? '#D1D5DB' : '#374151',
                    '&.active': { 
                      bgcolor: theme.palette.mode === 'dark' ? '#374151' : '#4B5563',
                      color: 'white',
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      },
                    },
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 36,
                    color: theme.palette.mode === 'dark' ? '#9CA3AF' : '#6B7280'
                  }}>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User Profile"
                    primaryTypographyProps={{ fontSize: '14px', color: 'inherit' }}
                  />
                  <ExpandMoreIcon sx={{ fontSize: 16, color: 'inherit' }} />
                </ListItemButton>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding dense>
                    {userProfileItems.map((item) => (
                      <ListItemButton
                        key={item.to}
                        component={NavLink}
                        to={item.to}
                        sx={{
                          borderRadius: 2,
                          mx: 2,
                          my: 0.25,
                          pl: 4,
                          color: theme.palette.mode === 'dark' ? '#D1D5DB' : '#374151',
                          '&:hover': {
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.1)',
                          },
                          '&.active': { 
                            bgcolor: theme.palette.mode === 'dark' ? '#374151' : '#4B5563',
                            color: 'white',
                            '& .MuiListItemIcon-root': {
                              color: 'white',
                            },
                          },
                        }}
                      >
                        <ListItemIcon sx={{ 
                          minWidth: 36,
                          color: theme.palette.mode === 'dark' ? '#9CA3AF' : '#6B7280'
                        }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.label}
                          primaryTypographyProps={{ fontSize: '14px', color: 'inherit' }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
              
              {/* Other Pages */}
              {pagesItems.filter(item => !item.hasSubItems).map((item) => (
                <ListItemButton
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    my: 0.25,
                    color: theme.palette.mode === 'dark' ? '#D1D5DB' : '#374151',
                    '&.active': { 
                      bgcolor: theme.palette.mode === 'dark' ? '#374151' : '#4B5563',
                      color: 'white',
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      },
                    },
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 36,
                    color: theme.palette.mode === 'dark' ? '#9CA3AF' : '#6B7280'
                  }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: '14px', color: 'inherit' }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
}


