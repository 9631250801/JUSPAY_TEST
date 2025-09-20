# API Documentation

This document provides comprehensive API documentation for the SaaS Dashboard application.

## 📚 Table of Contents

- [Components API](#components-api)
- [Utilities API](#utilities-api)
- [Hooks API](#hooks-api)
- [Theme API](#theme-api)
- [Animation API](#animation-api)
- [Accessibility API](#accessibility-api)
- [Performance API](#performance-api)

## 🧩 Components API

### Layout Components

#### AppLayout

Main layout wrapper component that provides the overall structure.

```jsx
import AppLayout from './layout/AppLayout';

<AppLayout>
  <YourPageContent />
</AppLayout>
```

**Props:**
- `children`: React node - The main content to be rendered

**Features:**
- Responsive sidebar
- Mobile drawer
- Theme integration
- Accessibility support

#### Sidebar

Left navigation sidebar component.

```jsx
import Sidebar from './layout/Sidebar';

<Sidebar />
```

**Features:**
- Collapsible sections
- Active state management
- Responsive design
- Dark/light theme support

#### Topbar

Top navigation bar component.

```jsx
import Topbar from './layout/Topbar';

<Topbar onMenuClick={handleMenuClick} />
```

**Props:**
- `onMenuClick`: Function - Mobile menu toggle handler

**Features:**
- Breadcrumb navigation
- Search functionality
- Theme toggle
- Mobile responsive

### Page Components

#### Dashboard

Main dashboard page with KPI cards and charts.

```jsx
import Dashboard from './pages/Dashboard';

<Dashboard />
```

**Features:**
- KPI cards with animations
- Interactive charts
- Responsive grid layout
- Real-time data updates

#### Tables

Data tables page with filtering and pagination.

```jsx
import Tables from './pages/Tables';

<Tables />
```

**Features:**
- Sortable columns
- Search functionality
- Pagination
- Row selection
- Responsive design

### Microinteraction Components

#### AnimatedCard

Animated card component with hover effects.

```jsx
import { AnimatedCard } from './components/microinteractions/MicroInteractions';

<AnimatedCard className="custom-class">
  <div>Card content</div>
</AnimatedCard>
```

**Props:**
- `children`: React node - Card content
- `className`: string - CSS class name
- `...props`: Additional props passed to motion.div

#### AnimatedButton

Animated button with press and hover effects.

```jsx
import { AnimatedButton } from './components/microinteractions/MicroInteractions';

<AnimatedButton onClick={handleClick}>
  Click Me
</AnimatedButton>
```

**Props:**
- `children`: React node - Button content
- `className`: string - CSS class name
- `onClick`: Function - Click handler
- `...props`: Additional props passed to motion.button

#### AnimatedCounter

Animated counter with smooth counting animation.

```jsx
import { AnimatedCounter } from './components/microinteractions/MicroInteractions';

<AnimatedCounter value={1000} duration={2} />
```

**Props:**
- `value`: number - Target value
- `duration`: number - Animation duration in seconds
- `className`: string - CSS class name
- `...props`: Additional props passed to motion.span

## 🛠️ Utilities API

### Accessibility Utilities

#### announceToScreenReader

Announces messages to screen readers.

```javascript
import { announceToScreenReader } from './utils/accessibility';

announceToScreenReader('New data loaded', 'polite');
```

**Parameters:**
- `message`: string - Message to announce
- `priority`: string - Priority level ('polite' or 'assertive')

#### getTableAccessibilityProps

Returns accessibility props for table components.

```javascript
import { getTableAccessibilityProps } from './utils/accessibility';

const tableProps = getTableAccessibilityProps('Order List with 10 orders');
```

**Parameters:**
- `caption`: string - Table caption/description

**Returns:**
- Object with ARIA attributes

#### getButtonProps

Returns accessibility props for button components.

```javascript
import { getButtonProps } from './utils/accessibility';

const buttonProps = getButtonProps('Add new item', false, false);
```

**Parameters:**
- `label`: string - Button label
- `pressed`: boolean - Whether button is pressed
- `expanded`: boolean - Whether button is expanded

**Returns:**
- Object with ARIA attributes

### Performance Utilities

#### useDebounce

Custom hook for debouncing values.

```javascript
import { useDebounce } from './utils/performance';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    // Perform search with debounced value
  }, [debouncedSearchTerm]);
}
```

**Parameters:**
- `value`: any - Value to debounce
- `delay`: number - Delay in milliseconds

**Returns:**
- Debounced value

#### useThrottle

Custom hook for throttling values.

```javascript
import { useThrottle } from './utils/performance';

function ScrollComponent() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 100);
  
  useEffect(() => {
    // Handle scroll with throttled value
  }, [throttledScrollY]);
}
```

**Parameters:**
- `value`: any - Value to throttle
- `limit`: number - Throttle limit in milliseconds

**Returns:**
- Throttled value

#### useIntersectionObserver

Custom hook for intersection observer.

```javascript
import { useIntersectionObserver } from './utils/performance';

function LazyComponent() {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  
  return (
    <div ref={ref}>
      {hasIntersected && <ExpensiveComponent />}
    </div>
  );
}
```

**Parameters:**
- `options`: Object - Intersection observer options

**Returns:**
- Array with [ref, isIntersecting, hasIntersected]

## 🎣 Hooks API

### Custom Hooks

#### usePerformanceMonitor

Monitors component performance.

```javascript
import { usePerformanceMonitor } from './utils/performance';

function MyComponent() {
  const renderCount = usePerformanceMonitor('MyComponent');
  
  return <div>Component content</div>;
}
```

**Parameters:**
- `componentName`: string - Name of the component

**Returns:**
- Number of renders

#### useMemoizedCallback

Memoized callback hook.

```javascript
import { useMemoizedCallback } from './utils/performance';

function MyComponent({ items }) {
  const handleClick = useMemoizedCallback((id) => {
    // Handle click
  }, []);
  
  return (
    <div>
      {items.map(item => (
        <button key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
```

**Parameters:**
- `callback`: Function - Callback function
- `deps`: Array - Dependencies array

**Returns:**
- Memoized callback

## 🎨 Theme API

### ThemeProvider

Theme provider component for managing theme state.

```jsx
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

**Features:**
- Dark/light theme switching
- Persistent theme preferences
- Material-UI integration
- Custom color palette

### useColorMode

Custom hook for theme management.

```javascript
import { useColorMode } from './theme/ThemeProvider';

function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();
  
  return (
    <button onClick={toggleColorMode}>
      {mode === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

**Returns:**
- Object with `mode` and `toggleColorMode`

## 🎭 Animation API

### Animation Variants

#### fadeInUp

Fade in animation from bottom.

```javascript
import { fadeInUp } from './components/animations/AnimationVariants';

<motion.div variants={fadeInUp}>
  Content
</motion.div>
```

#### hoverScale

Scale animation on hover.

```javascript
import { hoverScale } from './components/animations/AnimationVariants';

<motion.div whileHover={hoverScale.whileHover}>
  Hover me
</motion.div>
```

#### staggerContainer

Container for staggered animations.

```javascript
import { staggerContainer } from './components/animations/AnimationVariants';

<motion.div variants={staggerContainer}>
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
</motion.div>
```

## ♿ Accessibility API

### ARIA Roles

```javascript
import { ARIA_ROLES } from './utils/accessibility';

// Available roles
ARIA_ROLES.BUTTON
ARIA_ROLES.MENU
ARIA_ROLES.TAB
ARIA_ROLES.DIALOG
ARIA_ROLES.GRID
ARIA_ROLES.TABLE
```

### Keyboard Keys

```javascript
import { KEYBOARD_KEYS } from './utils/accessibility';

// Available keys
KEYBOARD_KEYS.ENTER
KEYBOARD_KEYS.SPACE
KEYBOARD_KEYS.ESCAPE
KEYBOARD_KEYS.TAB
KEYBOARD_KEYS.ARROW_UP
KEYBOARD_KEYS.ARROW_DOWN
```

### Focus Management

```javascript
import { focusElement } from './utils/accessibility';

// Focus an element
focusElement(elementRef.current);
```

## ⚡ Performance API

### Bundle Optimization

#### lazyLoadComponent

Lazy load components for code splitting.

```javascript
import { lazyLoadComponent } from './utils/performance';

const LazyComponent = lazyLoadComponent(() => import('./HeavyComponent'));
```

#### preloadResource

Preload critical resources.

```javascript
import { preloadResource } from './utils/performance';

preloadResource('/critical.css', 'style');
preloadResource('/critical.js', 'script');
```

### Web Vitals

#### reportWebVitals

Report web vitals for performance monitoring.

```javascript
import { reportWebVitals } from './utils/performance';

reportWebVitals(console.log);
```

## 📊 Data API

### Mock Data

#### KPI Data

```javascript
const kpis = [
  { title: 'Customers', value: '3,781', change: '+11.01%', trend: 'up' },
  { title: 'Orders', value: '1,219', change: '-0.03%', trend: 'down' },
  { title: 'Revenue', value: '$695', change: '+15.03%', trend: 'up' },
  { title: 'Growth', value: '30.1%', change: '+6.08%', trend: 'up' },
];
```

#### Chart Data

```javascript
const chartData = [
  { name: 'Jan', actual: 16, projection: 4 },
  { name: 'Feb', actual: 20, projection: 5 },
  { name: 'Mar', actual: 17, projection: 4 },
];
```

#### Table Data

```javascript
const tableData = [
  {
    id: '#CM9801',
    user: { name: 'Natali Craig', initials: 'NC' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: { label: 'In Progress', color: '#3b82f6' }
  },
  // ... more rows
];
```

## 🔧 Configuration API

### Environment Variables

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ANALYTICS_ID=GA-XXXXXXXXX
REACT_APP_SENTRY_DSN=https://sentry.io/...
```

### Build Configuration

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "test:coverage": "react-scripts test --coverage --watchAll=false",
    "analyze": "npm run build && npx source-map-explorer 'build/static/js/*.js'"
  }
}
```

## 🧪 Testing API

### Test Utilities

#### renderWithTheme

Render components with theme provider.

```javascript
import { renderWithTheme } from './test-utils';

renderWithTheme(<MyComponent />);
```

#### Custom Matchers

```javascript
// Custom Jest matchers for accessibility
expect(element).toHaveAccessibleName('Button');
expect(element).toHaveRole('button');
expect(element).toBeInTheDocument();
```

## 📱 Responsive API

### Breakpoints

```javascript
const breakpoints = {
  xs: 0,      // Extra small devices
  sm: 600,    // Small devices
  md: 900,    // Medium devices
  lg: 1200,   // Large devices
  xl: 1536,   // Extra large devices
};
```

### Media Queries

```javascript
import { useMediaQuery } from '@mui/material';

function ResponsiveComponent() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

## 🚀 Deployment API

### Vercel Configuration

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ]
}
```

### Build Scripts

```bash
# Development
npm start

# Production build
npm run build

# Test coverage
npm run test:coverage

# Bundle analysis
npm run analyze
```

## 📚 Examples

### Complete Component Example

```jsx
import React, { useState } from 'react';
import { 
  AnimatedCard, 
  AnimatedButton, 
  AnimatedCounter 
} from './components/microinteractions/MicroInteractions';
import { useDebounce } from './utils/performance';
import { announceToScreenReader } from './utils/accessibility';

function DashboardCard({ title, value, change, trend }) {
  const [isHovered, setIsHovered] = useState(false);
  const debouncedValue = useDebounce(value, 100);
  
  const handleClick = () => {
    announceToScreenReader(`${title}: ${value} with ${change} change`);
  };
  
  return (
    <AnimatedCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`${title} KPI Card`}
    >
      <h3>{title}</h3>
      <AnimatedCounter value={debouncedValue} duration={1.5} />
      <div className={`trend ${trend}`}>
        {change}
      </div>
    </AnimatedCard>
  );
}
```

### Custom Hook Example

```javascript
import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './utils/performance';

function useSearch(data, searchTerm) {
  const [filteredData, setFilteredData] = useState(data);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  const search = useCallback((term) => {
    if (!term) {
      setFilteredData(data);
      return;
    }
    
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredData(filtered);
  }, [data]);
  
  useEffect(() => {
    search(debouncedSearchTerm);
  }, [debouncedSearchTerm, search]);
  
  return { filteredData, search };
}
```

## 📖 Best Practices

1. **Component Design**: Keep components small and focused
2. **Performance**: Use React.memo and useCallback appropriately
3. **Accessibility**: Always include ARIA attributes and keyboard support
4. **Testing**: Write comprehensive tests for all components
5. **Documentation**: Document all props and usage examples
6. **Error Handling**: Provide fallback states and error boundaries
7. **Responsive Design**: Ensure components work on all screen sizes
8. **Animation Guidelines**: Keep animations subtle and purposeful

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**: Check Framer Motion installation
2. **Performance issues**: Use React DevTools Profiler
3. **Accessibility issues**: Test with screen readers
4. **Styling conflicts**: Check CSS specificity

### Debug Tools

- React DevTools
- Framer Motion DevTools
- Lighthouse
- axe-core

## 📄 License

This project is licensed under the MIT License.
