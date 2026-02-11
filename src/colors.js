// Función para obtener el valor real de las variables CSS
const getCSSVar = (varName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

// Helper simple para acceder a las variables CSS desde JavaScript
export const colors = {
  // Colores primarios
  primary: 'var(--color-primary)',
  primaryDark: 'var(--color-primary-dark)',
  primaryLight: 'var(--color-primary-light)',
  
  // Colores secundarios
  secondary: 'var(--color-secondary)',
  secondaryDark: 'var(--color-secondary-dark)',
  secondaryLight: 'var(--color-secondary-light)',
  
  // Colores de acento
  accent: 'var(--color-accent)',
  accentDark: 'var(--color-accent-dark)',
  accentLight: 'var(--color-accent-light)',
  accentGlow: 'var(--color-accent-glow)',
  
  // Colores neutros
  white: 'var(--color-white)',
  gray50: 'var(--color-gray-50)',
  gray100: 'var(--color-gray-100)',
  gray200: 'var(--color-gray-200)',
  gray300: 'var(--color-gray-300)',
  gray800: 'var(--color-gray-800)',
  gray900: 'var(--color-gray-900)',
  
  // Colores de texto
  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  textMuted: 'var(--color-text-muted)',
  textWhite: 'var(--color-text-white)',
  
  // Colores de fondo
  bgPrimary: 'var(--color-bg-primary)',
  bgSecondary: 'var(--color-bg-secondary)',
  bgDark: 'var(--color-bg-dark)',
  bgCard: 'var(--color-bg-card)'
};

// Valores reales de los colores (para mostrar en texto)
export const colorValues = {
  primary: () => getCSSVar('--color-primary'),
  primaryDark: () => getCSSVar('--color-primary-dark'),
  primaryLight: () => getCSSVar('--color-primary-light'),
  secondary: () => getCSSVar('--color-secondary'),
  accent: () => getCSSVar('--color-accent'),
  white: () => getCSSVar('--color-white'),
  textPrimary: () => getCSSVar('--color-text-primary'),
  textWhite: () => getCSSVar('--color-text-white')
};

export const shadows = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  glow: 'var(--shadow-glow)'
};

export const borderRadius = {
  sm: 'var(--border-radius-sm)',
  md: 'var(--border-radius-md)',
  lg: 'var(--border-radius-lg)',
  xl: 'var(--border-radius-xl)'
};

export const transitions = {
  fast: 'var(--transition-fast)',
  normal: 'var(--transition-normal)',
  slow: 'var(--transition-slow)'
};
