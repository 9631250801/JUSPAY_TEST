# Components Documentation

This directory contains all the reusable components for the SaaS Dashboard application.

## 📁 Directory Structure

```
components/
├── animations/
│   └── AnimationVariants.js      # Animation definitions and variants
├── microinteractions/
│   └── MicroInteractions.jsx     # Animated component library
├── __tests__/
│   └── MicroInteractions.test.js # Component tests
└── RightSidebar.jsx              # Right sidebar component
```

## 🎭 Animation Components

### AnimationVariants.js

Contains all animation definitions used throughout the application.

#### Available Animations

- **fadeInUp**: Fade in from bottom with upward movement
- **fadeInLeft**: Fade in from left side
- **fadeInRight**: Fade in from right side
- **scaleIn**: Scale in from smaller size
- **slideInFromTop**: Slide in from top
- **staggerContainer**: Container for staggered animations
- **staggerItem**: Individual item in staggered animation
- **hoverScale**: Scale effect on hover
- **hoverLift**: Lift effect on hover
- **hoverGlow**: Glow effect on hover
- **pulse**: Pulsing animation
- **spin**: Spinning animation
- **pageTransition**: Page transition animation
- **cardHover**: Card hover animation
- **buttonPress**: Button press animation
- **tableRowHover**: Table row hover animation
- **chartAnimation**: Chart animation

#### Usage

```javascript
import { fadeInUp, hoverScale } from '../animations/AnimationVariants';

// Use with Framer Motion
<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
>
  Content
</motion.div>
```

## 🎨 Microinteractions Components

### MicroInteractions.jsx

A comprehensive library of animated components built with Framer Motion.

#### Available Components

##### AnimatedCard
Animated card component with hover effects.

```jsx
<AnimatedCard className="custom-class">
  <div>Card content</div>
</AnimatedCard>
```

**Props:**
- `children`: React node
- `className`: CSS class name
- `...props`: Additional props passed to motion.div

##### AnimatedButton
Animated button with press and hover effects.

```jsx
<AnimatedButton onClick={handleClick}>
  Click Me
</AnimatedButton>
```

**Props:**
- `children`: Button content
- `className`: CSS class name
- `onClick`: Click handler
- `...props`: Additional props passed to motion.button

##### AnimatedIconButton
Animated icon button with rotation and scale effects.

```jsx
<AnimatedIconButton onClick={handleClick}>
  <Icon />
</AnimatedIconButton>
```

**Props:**
- `children`: Icon content
- `className`: CSS class name
- `onClick`: Click handler
- `...props`: Additional props passed to motion.button

##### AnimatedTableRow
Animated table row with hover effects.

```jsx
<AnimatedTableRow>
  <td>Cell content</td>
</AnimatedTableRow>
```

**Props:**
- `children`: Table row content
- `className`: CSS class name
- `...props`: Additional props passed to motion.tr

##### AnimatedListItem
Animated list item with staggered animation.

```jsx
<AnimatedListItem index={0}>
  <div>List item content</div>
</AnimatedListItem>
```

**Props:**
- `children`: List item content
- `className`: CSS class name
- `index`: Index for staggered animation
- `...props`: Additional props passed to motion.div

##### StaggerContainer
Container for staggered animations.

```jsx
<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

**Props:**
- `children`: Container content
- `className`: CSS class name
- `...props`: Additional props passed to motion.div

##### StaggerItem
Individual item in staggered animation.

```jsx
<StaggerItem>
  <div>Item content</div>
</StaggerItem>
```

**Props:**
- `children`: Item content
- `className`: CSS class name
- `...props`: Additional props passed to motion.div

##### AnimatedPage
Page container with transition animation.

```jsx
<AnimatedPage>
  <div>Page content</div>
</AnimatedPage>
```

**Props:**
- `children`: Page content
- `className`: CSS class name
- `...props`: Additional props passed to motion.div

##### AnimatedChart
Chart container with animation.

```jsx
<AnimatedChart>
  <ResponsiveContainer>
    <LineChart data={data}>
      <Line dataKey="value" />
    </LineChart>
  </ResponsiveContainer>
</AnimatedChart>
```

**Props:**
- `children`: Chart content
- `className`: CSS class name
- `...props`: Additional props passed to motion.div

##### AnimatedBadge
Animated badge with color and hover effects.

```jsx
<AnimatedBadge color="#3b82f6">
  Badge Text
</AnimatedBadge>
```

**Props:**
- `children`: Badge text
- `className`: CSS class name
- `color`: Badge color
- `...props`: Additional props passed to motion.span

##### AnimatedProgressBar
Animated progress bar with smooth filling.

```jsx
<AnimatedProgressBar 
  value={75} 
  max={100} 
  color="#3b82f6" 
/>
```

**Props:**
- `value`: Current value
- `max`: Maximum value
- `className`: CSS class name
- `color`: Progress bar color
- `...props`: Additional props passed to motion.div

##### AnimatedCounter
Animated counter with smooth counting animation.

```jsx
<AnimatedCounter 
  value={1000} 
  duration={2} 
/>
```

**Props:**
- `value`: Target value
- `duration`: Animation duration in seconds
- `className`: CSS class name
- `...props`: Additional props passed to motion.span

##### AnimatedSpinner
Animated loading spinner.

```jsx
<AnimatedSpinner size={24} color="#3b82f6" />
```

**Props:**
- `size`: Spinner size in pixels
- `color`: Spinner color
- `...props`: Additional props passed to motion.div

## 🧪 Testing

### Test Coverage

The components are thoroughly tested with Jest and React Testing Library.

#### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

#### Test Structure

Each component has corresponding tests that cover:

- **Rendering**: Component renders correctly
- **Props**: Props are passed correctly
- **Interactions**: Click handlers and user interactions
- **Accessibility**: ARIA attributes and keyboard navigation
- **Animations**: Animation variants and transitions

#### Example Test

```javascript
describe('AnimatedButton', () => {
  it('renders button with children', () => {
    renderWithTheme(
      <AnimatedButton data-testid="animated-button">
        Click Me
      </AnimatedButton>
    );
    
    expect(screen.getByTestId('animated-button')).toBeInTheDocument();
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(
      <AnimatedButton onClick={handleClick} data-testid="animated-button">
        Click Me
      </AnimatedButton>
    );
    
    fireEvent.click(screen.getByTestId('animated-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🎨 Styling

### CSS-in-JS

All components use Material-UI's `sx` prop for styling, which provides:

- **Theme Integration**: Access to theme variables
- **Responsive Design**: Breakpoint-based styling
- **Performance**: Optimized CSS generation
- **Type Safety**: TypeScript support

### Animation Performance

- **Hardware Acceleration**: Uses `transform` and `opacity` for smooth animations
- **Reduced Motion**: Respects user's motion preferences
- **Frame Rate**: Optimized for 60fps animations
- **Memory Management**: Proper cleanup of animation listeners

## ♿ Accessibility

### ARIA Support

All components include proper ARIA attributes:

- **Roles**: Semantic roles for screen readers
- **Labels**: Descriptive labels for interactive elements
- **States**: Current state information
- **Live Regions**: Dynamic content announcements

### Keyboard Navigation

- **Tab Order**: Logical tab sequence
- **Arrow Keys**: Navigation within components
- **Enter/Space**: Activation of interactive elements
- **Escape**: Dismissal of overlays

### Screen Reader Support

- **Announcements**: Dynamic content changes
- **Descriptions**: Detailed descriptions for complex components
- **Instructions**: Clear usage instructions

## 🚀 Performance

### Optimization Techniques

- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Memoized event handlers
- **useMemo**: Memoized expensive calculations
- **Lazy Loading**: Dynamic imports for large components

### Animation Performance

- **RequestAnimationFrame**: Smooth animation timing
- **Transform3d**: Hardware acceleration
- **Will-change**: Optimized rendering
- **Reduced Motion**: Respects user preferences

## 📚 Usage Examples

### Basic Usage

```jsx
import { AnimatedCard, AnimatedButton } from './components/microinteractions/MicroInteractions';

function MyComponent() {
  return (
    <AnimatedCard>
      <h2>Card Title</h2>
      <p>Card content</p>
      <AnimatedButton onClick={handleClick}>
        Action Button
      </AnimatedButton>
    </AnimatedCard>
  );
}
```

### Advanced Usage

```jsx
import { 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCounter 
} from './components/microinteractions/MicroInteractions';

function DataList({ items }) {
  return (
    <StaggerContainer>
      {items.map((item, index) => (
        <StaggerItem key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <AnimatedCounter value={item.value} />
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
```

## 🔧 Customization

### Custom Animations

```javascript
import { motion } from 'framer-motion';

const customAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

<motion.div variants={customAnimation}>
  Custom animated content
</motion.div>
```

### Theme Integration

```javascript
import { useTheme } from '@mui/material/styles';

function ThemedComponent() {
  const theme = useTheme();
  
  return (
    <AnimatedCard
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      }}
    >
      Themed content
    </AnimatedCard>
  );
}
```

## 📖 Best Practices

1. **Use Semantic HTML**: Always use appropriate HTML elements
2. **Provide Fallbacks**: Ensure components work without JavaScript
3. **Test Accessibility**: Use screen readers and keyboard navigation
4. **Optimize Performance**: Use React.memo and useCallback appropriately
5. **Document Props**: Always document component props and usage
6. **Handle Errors**: Provide error boundaries and fallback states
7. **Responsive Design**: Ensure components work on all screen sizes
8. **Animation Guidelines**: Keep animations subtle and purposeful

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**: Check if Framer Motion is properly installed
2. **Performance issues**: Use React DevTools Profiler to identify bottlenecks
3. **Accessibility issues**: Test with screen readers and keyboard navigation
4. **Styling conflicts**: Check for CSS specificity issues

### Debug Tools

- **React DevTools**: Component inspection and profiling
- **Framer Motion DevTools**: Animation debugging
- **Lighthouse**: Performance and accessibility auditing
- **axe-core**: Accessibility testing

## 📝 Contributing

When adding new components:

1. Follow the existing naming conventions
2. Include comprehensive tests
3. Document all props and usage
4. Ensure accessibility compliance
5. Add performance optimizations
6. Update this documentation

## 📄 License

This project is licensed under the MIT License.
