import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Avatar,
  IconButton,
  Stack,
  TextField,
  InputAdornment,
  Pagination,
  Card,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchRounded';
import AddIcon from '@mui/icons-material/AddRounded';
import FilterListIcon from '@mui/icons-material/FilterListRounded';
import SortIcon from '@mui/icons-material/SortRounded';
import MoreVertIcon from '@mui/icons-material/MoreVertRounded';
import CalendarTodayIcon from '@mui/icons-material/CalendarTodayRounded';
import LocationOnIcon from '@mui/icons-material/LocationOnRounded';
import { motion } from 'framer-motion';

// Order List Data exactly as shown in image
const orderData = [
  {
    id: '#CM9801',
    user: { name: 'Natali Craig', initials: 'NC', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: { label: 'In Progress', color: '#3b82f6' }
  },
  {
    id: '#CM9802',
    user: { name: 'Kate Morrison', initials: 'KM', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: { label: 'Complete', color: '#10b981' }
  },
  {
    id: '#CM9803',
    user: { name: 'Drew Cano', initials: 'DC', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: { label: 'Pending', color: '#f59e0b' }
  },
  {
    id: '#CM9804',
    user: { name: 'Orlando Diggs', initials: 'OD', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: { label: 'Approved', color: '#06b6d4' }
  },
  {
    id: '#CM9805',
    user: { name: 'Andi Lane', initials: 'AL', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: { label: 'Rejected', color: '#ef4444' }
  },
  {
    id: '#CM9806',
    user: { name: 'Natali Craig', initials: 'NC', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: { label: 'In Progress', color: '#3b82f6' }
  },
  {
    id: '#CM9807',
    user: { name: 'Kate Morrison', initials: 'KM', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: { label: 'Complete', color: '#10b981' }
  },
  {
    id: '#CM9808',
    user: { name: 'Drew Cano', initials: 'DC', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: { label: 'Pending', color: '#f59e0b' }
  },
  {
    id: '#CM9809',
    user: { name: 'Orlando Diggs', initials: 'OD' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: { label: 'Approved', color: '#06b6d4' }
  },
  {
    id: '#CM9810',
    user: { name: 'Andi Lane', initials: 'AL' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: { label: 'Rejected', color: '#ef4444' }
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress': return '#3b82f6'; // Blue
    case 'Complete': return '#10b981'; // Green
    case 'Pending': return '#f59e0b'; // Yellow
    case 'Approved': return '#06b6d4'; // Cyan
    case 'Rejected': return '#ef4444'; // Red
    default: return '#6b7280'; // Gray
  }
};

export default function Tables() {
  const [selectedRows, setSelectedRows] = useState(['#CM9804']); // CM9804 is selected in image
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleSelectRow = (orderId) => {
    setSelectedRows(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const filteredData = orderData.filter(order =>
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Box sx={{ 
      p: 0, 
      width: '100%',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Page Title */}
      <Typography 
        variant="h4" 
        fontWeight={700} 
        sx={{ 
          mb: { xs: 2, sm: 3 }, 
          color: 'text.primary', 
          fontSize: { xs: '20px', sm: '22px', md: '24px' }
        }}
      >
        Order List
      </Typography>

      {/* Action Bar */}
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        alignItems={{ xs: 'stretch', sm: 'center' }} 
        justifyContent="space-between" 
        spacing={{ xs: 2, sm: 0 }}
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        <Stack 
          direction="row" 
          alignItems="center" 
          spacing={{ xs: 0.5, sm: 1 }}
          sx={{ flexShrink: 0 }}
        >
          <IconButton 
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'white',
              width: { xs: 36, sm: 40 },
              height: { xs: 36, sm: 40 },
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: 'text.secondary', 
              width: { xs: 36, sm: 40 }, 
              height: { xs: 36, sm: 40 }
            }}
          >
            <FilterListIcon fontSize="small" />
          </IconButton>
          <IconButton 
            sx={{ 
              color: 'text.secondary', 
              width: { xs: 36, sm: 40 }, 
              height: { xs: 36, sm: 40 }
            }}
          >
            <SortIcon fontSize="small" />
          </IconButton>
        </Stack>
        
        <TextField
          size="small"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: { xs: '100%', sm: 200 },
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '100%', sm: 300 },
            '& .MuiOutlinedInput-root': {
              bgcolor: 'background.paper',
              height: 40,
            }
          }}
        />
      </Stack>

      {/* Order List Table */}
      <Card 
        variant="outlined" 
        sx={{ 
          bgcolor: 'background.paper',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        <TableContainer sx={{ 
          overflowX: 'auto',
          flex: 1,
          '&::-webkit-scrollbar': {
            height: 8,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 4,
          },
        }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'background.default' }}>
                <TableCell 
                  padding="checkbox" 
                  sx={{ 
                    width: { xs: 40, sm: 50 },
                    minWidth: { xs: 40, sm: 50 }
                  }}
                ></TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: 'text.secondary', 
                  fontSize: { xs: '12px', sm: '14px' },
                  minWidth: { xs: 80, sm: 100 }
                }}>Order ID</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: 'text.secondary', 
                  fontSize: { xs: '12px', sm: '14px' },
                  minWidth: { xs: 100, sm: 120 }
                }}>User</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: 'text.secondary', 
                  fontSize: { xs: '12px', sm: '14px' },
                  minWidth: { xs: 100, sm: 120 }
                }}>Project</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: 'text.secondary', 
                  fontSize: { xs: '12px', sm: '14px' },
                  display: { xs: 'none', md: 'table-cell' },
                  minWidth: 150
                }}>Address</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: 'text.secondary', 
                  fontSize: { xs: '12px', sm: '14px' },
                  minWidth: { xs: 80, sm: 100 }
                }}>Date</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: 'text.secondary', 
                  fontSize: { xs: '12px', sm: '14px' },
                  minWidth: { xs: 80, sm: 100 }
                }}>Status</TableCell>
                <TableCell sx={{ 
                  width: { xs: 40, sm: 50 },
                  minWidth: { xs: 40, sm: 50 }
                }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((order, index) => (
                <motion.tr
                  key={`${order.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(order.id)}
                      onChange={() => handleSelectRow(order.id)}
                      sx={{ 
                        color: 'text.secondary',
                        p: { xs: 0.5, sm: 1 }
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ 
                    color: 'text.primary', 
                    fontWeight: 500, 
                    fontSize: { xs: '12px', sm: '14px' }
                  }}>
                    {order.id}
                  </TableCell>
                  <TableCell>
                    <Stack 
                      direction="row" 
                      alignItems="center" 
                      spacing={{ xs: 0.5, sm: 1 }}
                      sx={{ minWidth: 0 }}
                    >
                      <Avatar 
                        src={order.user.image}
                        alt={order.user.name}
                        sx={{ 
                          width: { xs: 28, sm: 32 }, 
                          height: { xs: 28, sm: 32 }, 
                          bgcolor: '#374151',
                          fontSize: { xs: '10px', sm: '12px' },
                          fontWeight: 600,
                          flexShrink: 0
                        }}
                      >
                        {order.user.initials}
                      </Avatar>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.primary', 
                          fontSize: { xs: '12px', sm: '14px' },
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {order.user.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ 
                    color: 'text.primary', 
                    fontSize: { xs: '12px', sm: '14px' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {order.project}
                  </TableCell>
                  <TableCell sx={{ 
                    color: 'text.primary', 
                    fontSize: { xs: '12px', sm: '14px' },
                    display: { xs: 'none', md: 'table-cell' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {order.address}
                  </TableCell>
                  <TableCell sx={{ 
                    color: 'text.primary', 
                    fontSize: { xs: '12px', sm: '14px' }
                  }}>
                    {order.date}
                  </TableCell>
                  <TableCell>
                    <Stack 
                      direction="row" 
                      alignItems="center" 
                      spacing={{ xs: 0.5, sm: 1 }}
                      sx={{ minWidth: 0 }}
                    >
                      <Box
                        sx={{
                          width: { xs: 6, sm: 8 },
                          height: { xs: 6, sm: 8 },
                          borderRadius: '50%',
                          bgcolor: order.status.color,
                          flexShrink: 0
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.primary', 
                          fontSize: { xs: '11px', sm: '12px', md: '14px' },
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {order.status.label}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        color: 'text.secondary',
                        p: { xs: 0.5, sm: 1 }
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Pagination */}
      <Stack 
        direction="row" 
        justifyContent={{ xs: 'center', sm: 'flex-end' }} 
        sx={{ 
          mt: { xs: 2, sm: 3 },
          flexShrink: 0
        }}
      >
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
          color="primary"
          size="small"
          showFirstButton
          showLastButton
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'text.secondary',
              fontSize: { xs: '12px', sm: '14px' },
              minWidth: { xs: 28, sm: 32 },
              height: { xs: 28, sm: 32 },
              '&.Mui-selected': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            },
            '& .MuiPaginationItem-ellipsis': {
              display: { xs: 'none', sm: 'flex' }
            }
          }}
        />
      </Stack>
    </Box>
  );
}