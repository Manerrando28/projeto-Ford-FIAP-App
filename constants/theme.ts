/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0b5fff';
const tintColorDark = '#8ab4ff';

export const Colors = {
  light: {
    text: '#0f172a',
    mutedText: '#52607a',
    background: '#f4f7fb',
    surface: '#ffffff',
    surfaceMuted: '#eef3f9',
    surfaceElevated: '#ffffff',
    border: '#d9e2ef',
    tint: tintColorLight,
    accent: '#0f4fd6',
    accentSoft: '#dbe8ff',
    icon: '#5b687f',
    tabIconDefault: '#5b687f',
    tabIconSelected: tintColorLight,
    success: '#157f3d',
    warning: '#b86a00',
    danger: '#b42318',
  },
  dark: {
    text: '#eef2ff',
    mutedText: '#9aa7bd',
    background: '#08111f',
    surface: '#101a2b',
    surfaceMuted: '#152238',
    surfaceElevated: '#132034',
    border: '#213149',
    tint: tintColorDark,
    accent: '#8ab4ff',
    accentSoft: '#10294b',
    icon: '#93a4bd',
    tabIconDefault: '#93a4bd',
    tabIconSelected: tintColorDark,
    success: '#5fd18a',
    warning: '#f4b860',
    danger: '#ff8a7a',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
