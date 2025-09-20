import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, useTheme } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReportRounded';
import PersonAddIcon from '@mui/icons-material/PersonAddRounded';
import CampaignIcon from '@mui/icons-material/CampaignRounded';
import { motion } from 'framer-motion';

const notifications = [
  { icon: <BugReportIcon />, text: "You have a bug that needs...", time: "Just now" },
  { icon: <PersonAddIcon />, text: "New user registered", time: "59 minutes ago" },
  { icon: <BugReportIcon />, text: "You have a bug that needs...", time: "12 hours ago" },
  { icon: <CampaignIcon />, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const activities = [
  { avatar: "NC", text: "You have a bug that needs...", time: "Just now", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
  { avatar: "DC", text: "Released a new version", time: "59 minutes ago", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { avatar: "OD", text: "Submitted a bug", time: "12 hours ago", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { avatar: "AL", text: "Modified A data in Page X", time: "Today, 11:59 AM", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
  { avatar: "KM", text: "Deleted a page in Project X", time: "Feb 2, 2023", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
];

const contacts = [
  { name: "Natali Craig", avatar: "NC", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
  { name: "Drew Cano", avatar: "DC", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { name: "Orlando Diggs", avatar: "OD", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { name: "Andi Lane", avatar: "AL", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
  { name: "Kate Morrison", avatar: "KM", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
  { name: "Koray Okumus", avatar: "KO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
];

export default function RightSidebar() {
  const theme = useTheme();
  
  return (
    <Box 
      component="aside" 
      sx={{ 
        width: 280,
        right: 0,
        top: 0,
        bottom: 0,
        padding: '20px',
        gap: '24px',
        borderLeft: '1px solid rgba(55, 65, 81, 0.3)',
        flexShrink: 0, 
        display: { xs: 'none', lg: 'block' },
        bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : 'background.paper',
        boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(13, 38, 59, 0.06)'
      }}
    >
      {/* Notifications */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: 'text.primary', fontSize: '16px' }}>
          Notifications
        </Typography>
        <List dense>
          {notifications.map((notification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  {notification.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={notification.text}
                  secondary={notification.time}
                  primaryTypographyProps={{ fontSize: '14px', color: 'text.primary' }}
                  secondaryTypographyProps={{ fontSize: '12px', color: 'text.secondary' }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Activities */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: 'text.primary', fontSize: '16px' }}>
          Activities
        </Typography>
        <List dense>
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Avatar 
                    src={activity.image}
                    alt={activity.text}
                    sx={{ width: 24, height: 24, fontSize: '0.75rem' }}
                  >
                    {activity.avatar}
                  </Avatar>
                </ListItemIcon>
                <ListItemText 
                  primary={activity.text}
                  secondary={activity.time}
                  primaryTypographyProps={{ fontSize: '14px', color: 'text.primary' }}
                  secondaryTypographyProps={{ fontSize: '12px', color: 'text.secondary' }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Contacts */}
      <Box>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: 'text.primary', fontSize: '16px' }}>
          Contacts
        </Typography>
        <List dense>
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Avatar 
                    src={contact.image}
                    alt={contact.name}
                    sx={{ width: 24, height: 24, fontSize: '0.75rem' }}
                  >
                    {contact.avatar}
                  </Avatar>
                </ListItemIcon>
                <ListItemText 
                  primary={contact.name}
                  primaryTypographyProps={{ fontSize: '14px', color: 'text.primary' }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </Box>
  );
}
