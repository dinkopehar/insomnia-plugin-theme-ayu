export interface ThemeStyle {
  background?: {
    default?: string;
    success?: string;
    notice?: string;
    warning?: string;
    danger?: string;
    surprise?: string;
    info?: string;
  };
  foreground?: {
    default?: string;
    success?: string;
    notice?: string;
    warning?: string;
    danger?: string;
    surprise?: string;
    info?: string;
  };
  highlight?: {
    default: string;
    xxs?: string;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export interface Theme {
  name: string;
  displayName: string;
  theme: ThemeStyle;
}
