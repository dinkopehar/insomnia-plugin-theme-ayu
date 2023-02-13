import * as ayu from "ayu";

import { Theme, ThemeStyle } from "./themeSchema";

const insomniaThemeStyle = (theme: ayu.Scheme): ThemeStyle => {
  return {
    background: {
      default: theme.ui.bg.hex(),
      success: theme.common.accent.hex(),
      warning: theme.syntax.tag.hex(),
      notice: theme.syntax.tag.hex(),
      surprise: theme.syntax.entity.hex(),
      info: theme.syntax.constant.hex(),
      danger: theme.common.error.hex(),
    },
    foreground: {
      default: theme.editor.fg.hex(),
    },
    highlight: {
      default: theme.editor.fg.hex(),
    },
  };
};

const insomniaTheme = (themeName: string): Theme => {
  return {
    name: `ayu-${themeName.toLocaleLowerCase()}`,
    displayName: `Ayu ${themeName}`,
    theme: insomniaThemeStyle(ayu[themeName.toLowerCase()]),
  };
};

const themes = ["Dark", "Mirage", "Light"].map((t) => insomniaTheme(t));

module.exports.themes = themes;
