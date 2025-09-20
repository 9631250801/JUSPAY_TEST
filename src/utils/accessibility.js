// Accessibility utilities and helpers

// ARIA roles and attributes
export const ARIA_ROLES = {
  BUTTON: 'button',
  MENU: 'menu',
  MENUITEM: 'menuitem',
  TAB: 'tab',
  TABPANEL: 'tabpanel',
  TABLIST: 'tablist',
  DIALOG: 'dialog',
  ALERT: 'alert',
  STATUS: 'status',
  PROGRESSBAR: 'progressbar',
  TOOLTIP: 'tooltip',
  GRID: 'grid',
  GRIDCELL: 'gridcell',
  ROW: 'row',
  COLUMNHEADER: 'columnheader',
  ROWHEADER: 'rowheader'
};

// Keyboard navigation helpers
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown'
};

// Focus management
export const focusElement = (element) => {
  if (element && typeof element.focus === 'function') {
    element.focus();
  }
};

// Screen reader announcements
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Table accessibility helpers
export const getTableAccessibilityProps = (caption) => ({
  role: ARIA_ROLES.GRID,
  'aria-label': caption,
  'aria-rowcount': 0, // Will be set dynamically
  'aria-colcount': 0  // Will be set dynamically
});

export const getTableHeaderProps = (columnIndex, isSortable = false) => ({
  role: ARIA_ROLES.COLUMNHEADER,
  'aria-sort': isSortable ? 'none' : undefined,
  tabIndex: isSortable ? 0 : undefined,
  'aria-colindex': columnIndex + 1
});

export const getTableRowProps = (rowIndex, isSelected = false) => ({
  role: ARIA_ROLES.ROW,
  'aria-selected': isSelected,
  'aria-rowindex': rowIndex + 1
});

export const getTableCellProps = (columnIndex, rowIndex) => ({
  role: ARIA_ROLES.GRIDCELL,
  'aria-colindex': columnIndex + 1,
  'aria-rowindex': rowIndex + 1
});

// Button accessibility helpers
export const getButtonProps = (label, pressed = false, expanded = false) => ({
  'aria-label': label,
  'aria-pressed': pressed,
  'aria-expanded': expanded,
  type: 'button'
});

// Form accessibility helpers
export const getFormFieldProps = (id, label, required = false, invalid = false) => ({
  id,
  'aria-label': label,
  'aria-required': required,
  'aria-invalid': invalid,
  'aria-describedby': invalid ? `${id}-error` : undefined
});

// High contrast mode detection
export const isHighContrastMode = () => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Reduced motion detection
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
