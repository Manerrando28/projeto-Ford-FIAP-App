import { useWindowDimensions } from 'react-native';

export function useResponsiveLayout() {
  const { width } = useWindowDimensions();

  const isCompact = width < 390;
  const isTablet = width >= 768;

  return {
    width,
    isCompact,
    isTablet,
    pagePadding: isTablet ? 32 : 20,
    cardRadius: isTablet ? 30 : 28,
    contentMaxWidth: isTablet ? 920 : 640,
    titleSize: isCompact ? 28 : isTablet ? 40 : 34,
    sectionTitleSize: isCompact ? 20 : 22,
    bodyTextSize: isCompact ? 14 : 15,
    imageHeight: isCompact ? 180 : isTablet ? 280 : 220,
  };
}