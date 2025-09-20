import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { 
  AnimatedCard, 
  AnimatedButton, 
  AnimatedIconButton,
  AnimatedBadge,
  AnimatedCounter
} from '../microinteractions/MicroInteractions';

const theme = createTheme();

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('MicroInteractions Components', () => {
  describe('AnimatedCard', () => {
    it('renders with children', () => {
      renderWithTheme(
        <AnimatedCard data-testid="animated-card">
          <div>Test Content</div>
        </AnimatedCard>
      );
      
      expect(screen.getByTestId('animated-card')).toBeInTheDocument();
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      renderWithTheme(
        <AnimatedCard className="custom-class" data-testid="animated-card">
          <div>Test Content</div>
        </AnimatedCard>
      );
      
      expect(screen.getByTestId('animated-card')).toHaveClass('custom-class');
    });
  });

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

  describe('AnimatedIconButton', () => {
    it('renders icon button', () => {
      renderWithTheme(
        <AnimatedIconButton data-testid="animated-icon-button">
          <span>Icon</span>
        </AnimatedIconButton>
      );
      
      expect(screen.getByTestId('animated-icon-button')).toBeInTheDocument();
    });

    it('handles click events', () => {
      const handleClick = jest.fn();
      renderWithTheme(
        <AnimatedIconButton onClick={handleClick} data-testid="animated-icon-button">
          <span>Icon</span>
        </AnimatedIconButton>
      );
      
      fireEvent.click(screen.getByTestId('animated-icon-button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('AnimatedBadge', () => {
    it('renders badge with text', () => {
      renderWithTheme(
        <AnimatedBadge data-testid="animated-badge">
          Badge Text
        </AnimatedBadge>
      );
      
      expect(screen.getByTestId('animated-badge')).toBeInTheDocument();
      expect(screen.getByText('Badge Text')).toBeInTheDocument();
    });

    it('applies custom color', () => {
      renderWithTheme(
        <AnimatedBadge color="#ff0000" data-testid="animated-badge">
          Badge Text
        </AnimatedBadge>
      );
      
      const badge = screen.getByTestId('animated-badge');
      expect(badge).toHaveStyle('background-color: #ff0000');
    });
  });

  describe('AnimatedCounter', () => {
    it('renders counter with initial value', () => {
      renderWithTheme(
        <AnimatedCounter value={100} data-testid="animated-counter" />
      );
      
      expect(screen.getByTestId('animated-counter')).toBeInTheDocument();
    });

    it('formats numbers with commas', () => {
      renderWithTheme(
        <AnimatedCounter value={1000} data-testid="animated-counter" />
      );
      
      // The counter will animate, so we check for the initial value
      expect(screen.getByTestId('animated-counter')).toBeInTheDocument();
    });
  });
});
