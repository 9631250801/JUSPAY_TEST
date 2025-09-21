import React from 'react';
import { Box, Grid, Card, CardContent, Typography, List, ListItem, ListItemText, ListItemIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownIcon from '@mui/icons-material/TrendingDownRounded';
// Import image for Revenue by Location
import locationMapImage from '../assets/images/location-map.png';

// KPI Data exactly as shown in image
const kpis = [
  { title: 'Customers', value: '3,781', change: '+11.01%', trend: 'up' },
  { title: 'Orders', value: '1,219', change: '-0.03%', trend: 'down' },
  { title: 'Revenue', value: '$695', change: '+15.03%', trend: 'up' },
  { title: 'Growth', value: '30.1%', change: '+6.08%', trend: 'up' },
];

// Chart data with both actuals and projections
const projectionsData = [
  { name: 'Jan', actual: 16, projection: 4 },
  { name: 'Feb', actual: 20, projection: 5 },
  { name: 'Mar', actual: 17, projection: 4 },
  { name: 'Apr', actual: 22, projection: 6 },
  { name: 'May', actual: 14, projection: 4 },
  { name: 'Jun', actual: 20, projection: 5 },
];

const revenueData = [
  { name: 'Jan', current: 12, previous: 8 },
  { name: 'Feb', current: 15, previous: 12 },
  { name: 'Mar', current: 8, previous: 15 },
  { name: 'Apr', current: 18, previous: 10 },
  { name: 'May', current: 22, previous: 18 },
  { name: 'Jun', current: 16, previous: 20 },
];

const pieData = [
  { name: 'Direct', value: 300.56, color: '#6B7280' },
  { name: 'Affiliate', value: 135.18, color: '#10B981' },
  { name: 'Sponsored', value: 154.02, color: '#8B5CF6' },
  { name: 'E-mail', value: 48.96, color: '#3B82F6' },
];

const topProducts = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

const locations = [
  { name: 'New York', revenue: '72K' },
  { name: 'San Francisco', revenue: '39K' },
  { name: 'Sydney', revenue: '25K' },
  { name: 'Singapore', revenue: '61K' },
];

// World Map Component
const WorldMap = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      width: 154, 
      height: 100, 
      borderRadius: 2, 
      background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F9FAFB',
      border: `1px solid ${theme.palette.divider}`,
      position: 'relative',
      mb: 2,
      overflow: 'hidden'
    }}>
    {/* World map continents (simplified outline) */}
    <Box sx={{
      position: 'absolute',
      top: 20,
      left: 25,
      width: 50,
      height: 35,
      borderRadius: '50% 30% 40% 20%',
      background: 'transparent',
      border: '2px solid #E5E7EB',
      opacity: 0.8
    }} />
    <Box sx={{
      position: 'absolute',
      top: 40,
      left: 80,
      width: 40,
      height: 30,
      borderRadius: '30% 50% 20% 40%',
      background: 'transparent',
      border: '2px solid #E5E7EB',
      opacity: 0.8
    }} />
    
    {/* Location dots */}
    <Box sx={{ 
      position: 'absolute', 
      top: 15, 
      left: 40, 
      width: 6, 
      height: 6, 
      borderRadius: '50%', 
      bgcolor: 'text.primary'
    }} />
    <Box sx={{ 
      position: 'absolute', 
      top: 30, 
      left: 20, 
      width: 6, 
      height: 6, 
      borderRadius: '50%', 
      bgcolor: 'text.primary'
    }} />
    <Box sx={{ 
      position: 'absolute', 
      top: 60, 
      left: 120, 
      width: 6, 
      height: 6, 
      borderRadius: '50%', 
      bgcolor: 'text.primary'
    }} />
    <Box sx={{ 
      position: 'absolute', 
      top: 45, 
      left: 105, 
      width: 6, 
      height: 6, 
      borderRadius: '50%', 
      bgcolor: theme.palette.text.primary
    }} />
  </Box>
  );
};

export default function Dashboard() {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: '100%', 
      bgcolor: 'background.default',
      minHeight: '100%'
    }}>
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: '1fr', 
          md: '1fr 1fr', 
          lg: '1fr 1fr' 
        },
        gap: { xs: 2, sm: 2.5, md: 3, lg: '28px' },
        width: '100%',
        maxWidth: '100%',
        minHeight: '100%'
      }}>
      {/* Left Side: 2x2 Grid of KPI Cards */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: '1fr 1fr', 
          md: '1fr 1fr' 
        }, 
        gap: { xs: 2, sm: 1.5, md: 2, lg: '8px' },
        width: '100%',
        height: 'fit-content',
        alignContent: 'start'
      }}>
        {/* KPI Cards */}
        {kpis.map((kpi, index) => (
          <Card 
            key={kpi.title}
            variant="outlined" 
            sx={{ 
              width: '100%',
              height: { xs: 'auto', sm: 112, md: 112 },
              minHeight: { xs: 100, sm: 112 },
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.1)' : '#E3F5FF',
              boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(13, 38, 59, 0.06)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              opacity: 1,
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : '#E3F5FF',
                transform: 'translateY(-2px)',
                boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.4)' : '0 8px 25px rgba(13, 38, 59, 0.12)',
                '& .value-container': {
                  flexDirection: 'row-reverse'
                }
              }
            }}
          >
            <CardContent sx={{ 
              p: { xs: 2, sm: 2.5, md: 3 }, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between'
            }}>
              <Typography 
                variant="body2" 
                fontWeight={500} 
                color="text.secondary" 
                sx={{ 
                  fontSize: { xs: '12px', sm: '13px', md: '14px' },
                  lineHeight: 1.4
                }}
              >
                {kpi.title}
              </Typography>
              <Box className="value-container" sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                mt: { xs: 1, sm: 1.5 }
              }}>
                <Typography 
                  variant="h4" 
                  fontWeight={700} 
                  sx={{ 
                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, 
                    color: 'text.primary',
                    lineHeight: 1.2
                  }}
                >
                  {kpi.value}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: { xs: 0.25, sm: 0.5 },
                  flexShrink: 0
                }}>
                  {kpi.trend === 'up' ? (
                    <TrendingUpIcon sx={{ 
                      color: '#10B981', 
                      fontSize: { xs: '16px', sm: '18px', md: '20px' } 
                    }} />
                  ) : (
                    <TrendingDownIcon sx={{ 
                      color: '#EF4444', 
                      fontSize: { xs: '16px', sm: '18px', md: '20px' } 
                    }} />
                  )}
                  <Typography
                    variant="body2"
                    color={kpi.trend === 'up' ? '#10B981' : '#EF4444'}
                    fontWeight={500}
                    sx={{ 
                      fontSize: { xs: '11px', sm: '12px', md: '14px' },
                      lineHeight: 1.2
                    }}
                  >
                    {kpi.change}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Right Side: Projections vs Actuals Chart */}
      <Card 
        variant="outlined" 
        sx={{ 
          width: '100%',
          height: { xs: 'auto', sm: 252, md: 252 },
          minHeight: { xs: 200, sm: 252 },
          bgcolor: 'background.paper',
          boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(13, 38, 59, 0.06)',
          borderRadius: 3,
          border: 'none',
          opacity: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardContent sx={{ 
          p: { xs: 2, sm: 2.5, md: 3 }, 
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography 
            variant="h6" 
            fontWeight={600} 
            sx={{ 
              mb: { xs: 2, sm: 2.5, md: 3 }, 
              color: 'text.primary', 
              fontSize: { xs: '14px', sm: '15px', md: '16px' }
            }}
          >
            Projections vs Actuals
          </Typography>
          <Box sx={{ 
            height: { xs: 150, sm: 168 }, 
            overflow: 'hidden',
            flex: 1,
            minHeight: { xs: 150, sm: 168 }
          }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectionsData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                <XAxis dataKey="name" stroke={theme.palette.text.secondary} fontSize={12} />
                <YAxis stroke={theme.palette.text.secondary} domain={[0, 30]} ticks={[0, 10, 20, 30]} fontSize={12} width={30} />
                <Tooltip />
                <Bar dataKey="actual" stackId="a" fill="#5B9BD5" radius={[0, 0, 0, 0]} />
                <Bar dataKey="projection" stackId="a" fill="#B4D7FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          {/* Legend */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 16, height: 12, bgcolor: '#5B9BD5', borderRadius: 1 }} />
              <Typography variant="body2" sx={{ fontSize: '12px', color: 'text.secondary' }}>
                342 Fill
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 16, height: 12, bgcolor: '#B4D7FF', borderRadius: 1 }} />
              <Typography variant="body2" sx={{ fontSize: '12px', color: 'text.secondary' }}>
                168 Fill
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Additional Sections Below Main Grid */}
      <Box sx={{ 
        gridColumn: '1 / -1', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: { xs: 2, sm: 3, md: '28px' }, 
        mt: { xs: 2, sm: 3 } 
      }}>
        {/* Revenue Chart and Revenue by Location - Side by Side */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: '1fr', 
            md: '1fr 1fr' 
          }, 
          gap: { xs: 2, sm: 2, md: '16px' }, 
          alignItems: 'stretch' 
        }}>
          {/* Revenue Trend Chart */}
          <Card 
            variant="outlined" 
            sx={{ 
              width: { xs: '100%', sm: '100%', md: 662 },
              height: { xs: 'auto', sm: 318 },
              minWidth: { xs: 'auto', sm: 662 },
              bgcolor: 'background.paper',
              boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(13, 38, 59, 0.06)',
              // borderRadius: 16,
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              opacity: 1
            }}
          >
            <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', padding: '24px', }}>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 3, color: 'text.primary', fontSize: '16px' }}>
                Revenue
              </Typography>
              <Box sx={{ flex: 1, minHeight: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                    <XAxis dataKey="name" stroke={theme.palette.text.secondary} fontSize={12} />
                    <YAxis stroke={theme.palette.text.secondary} domain={[0, 30]} ticks={[0, 10, 20, 30]} fontSize={12} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="current" 
                      stroke={theme.palette.text.primary} 
                      strokeWidth={3}
                      dot={false}
                      activeDot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="previous" 
                      stroke="#60A5FA" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      activeDot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
              {/* Custom Legend */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 3, mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 3, bgcolor: theme.palette.text.primary, borderRadius: 1 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                    • Current Week $58,211
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 3, bgcolor: '#60A5FA', borderRadius: 1, background: 'repeating-linear-gradient(90deg, #60A5FA 0px, #60A5FA 3px, transparent 3px, transparent 6px)' }} />
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                    • Previous Week $68,768
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Revenue by Location */}
          <Card 
            variant="outlined" 
            sx={{ 
              width: { xs: '100%', sm: '100%', md: 202 },
              height: { xs: 'auto', sm: 318 },
              minWidth: { xs: 'auto', sm: 200 },
              maxWidth: { xs: '100%', sm: 272 },
              bgcolor: 'background.paper',
              boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(13, 38, 59, 0.06)',
              borderRadius: 3,
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              opacity: 1
            }}
          >
            <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column', padding: '24px' }}>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2, color: 'text.primary', fontSize: '14px' }}>
                Revenue by Location
              </Typography>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  <Box
                    component="img"
                    src={locationMapImage}
                    alt="Revenue by Location Map"
                    sx={{
                      width: 154,
                      height: 100,
                      objectFit: 'contain',
                      borderRadius: 2
                    }}
                  />
                </Box>
                <List dense sx={{ mt: 1 }}>
                  {locations.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemText 
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ fontSize: '12px', color: 'text.secondary' }}>
                              {item.name}
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 600, color: 'text.primary' }}>
                              {item.revenue}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Top Selling Products Table and Total Sales Donut Chart - Side by Side */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: '1fr', 
            md: '2fr 1fr' 
          }, 
          gap: { xs: 2, sm: 2, md: '16px' } 
        }}>
          {/* Top Selling Products Table */}
          <Card 
            variant="outlined" 
            sx={{ 
              width: { xs: '100%', sm: '100%', md: 662 },
              height: { xs: 'auto', sm: 336 },
              minWidth: { xs: 'auto', sm: 662 },
              bgcolor: 'background.paper',
              boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(13, 38, 59, 0.06)',
              borderRadius: 3,
              border: 'none',
              opacity: 1
            }}
          >
            <CardContent sx={{ p: 3, padding: '24px' }}>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 3, color: 'text.primary', fontSize: '16px' }}>
                Top Selling Products
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F9FAFB' }}>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '12px', pb: 2, border: 'none' }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '12px', pb: 2, border: 'none' }}>Price</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '12px', pb: 2, border: 'none' }}>Quantity</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '12px', pb: 2, textAlign: 'right', border: 'none' }}>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topProducts.map((item) => (
                      <TableRow 
                        key={item.name}
                        sx={{ 
                          '&:nth-of-type(odd)': { bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)' },
                          '&:hover': { 
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                            cursor: 'pointer'
                          }
                        }}
                      >
                        <TableCell sx={{ color: 'text.secondary', fontSize: '14px', border: 'none', py: 1 }}>
                          {item.name}
                        </TableCell>
                        <TableCell sx={{ color: 'text.secondary', fontSize: '14px', border: 'none', py: 1 }}>
                          {item.price}
                        </TableCell>
                        <TableCell sx={{ color: 'text.secondary', fontSize: '14px', border: 'none', py: 1 }}>
                          {item.quantity}
                        </TableCell>
                        <TableCell sx={{ color: 'text.primary', fontSize: '14px', border: 'none', py: 1, textAlign: 'right', fontWeight: 600 }}>
                          {item.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          {/* Total Sales Donut Chart */}
          <Card 
            variant="outlined" 
            sx={{ 
              width: { xs: '100%', sm: '100%', md: 202 },
              height: { xs: 'auto', sm: 344 },
              minWidth: { xs: 'auto', sm: 200 },
              maxWidth: { xs: '100%', sm: 272 },
              bgcolor: 'background.paper',
              boxShadow: theme.palette.mode === 'dark' ? '0 6px 20px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(13, 38, 59, 0.06)',
              // borderRadius: 16,
              border: 'none',
              opacity: 1
            }}
          >
            <CardContent sx={{ p: 2, padding: '24px' }}>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2, color: 'text.primary', fontSize: '14px' }}>
                Total Sales
              </Typography>
              <Box sx={{ height: 160, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center text */}
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} sx={{ fontSize: '16px', color: 'text.primary' }}>
                    38.6%
                  </Typography>
                </Box>
              </Box>
              {/* Legend */}
              <List dense sx={{ mt: 1 }}>
                {pieData.map((item) => (
                  <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
                    <ListItemText 
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box sx={{ width: 8, height: 8, bgcolor: item.color, borderRadius: '50%' }} />
                            <Typography variant="body2" sx={{ fontSize: '11px', color: 'text.secondary' }}>
                              {item.name}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ fontSize: '11px', fontWeight: 600, color: 'text.primary' }}>
                            ${item.value}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}