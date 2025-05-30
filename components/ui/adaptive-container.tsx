'use client';

import * as React from 'react';
import { useAdaptiveUI } from '@/hooks/use-adaptive-ui';
import { cn } from '@/lib/utils';

interface AdaptiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Container width for different screen sizes
  mobileWidth?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  tabletWidth?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  desktopWidth?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  
  // Padding for different screen sizes
  mobilePaddingX?: number;
  mobilePaddingY?: number;
  tabletPaddingX?: number;
  tabletPaddingY?: number;
  desktopPaddingX?: number;
  desktopPaddingY?: number;
  
  // Margin for different screen sizes
  mobileMarginX?: number;
  mobileMarginY?: number;
  tabletMarginX?: number;
  tabletMarginY?: number;
  desktopMarginX?: number;
  desktopMarginY?: number;
  
  // Max width for different screen sizes
  mobileMaxWidth?: string;
  tabletMaxWidth?: string;
  desktopMaxWidth?: string;
  
  // Children
  children: React.ReactNode;
}

export function AdaptiveContainer({
  className,
  mobileWidth = 'full',
  tabletWidth = 'lg',
  desktopWidth = 'xl',
  mobilePaddingX = 4,
  mobilePaddingY = 4,
  tabletPaddingX = 6,
  tabletPaddingY = 6,
  desktopPaddingX = 8,
  desktopPaddingY = 8,
  mobileMarginX = 0,
  mobileMarginY = 0,
  tabletMarginX = 0,
  tabletMarginY = 0,
  desktopMarginX = 0,
  desktopMarginY = 0,
  mobileMaxWidth,
  tabletMaxWidth,
  desktopMaxWidth,
  children,
  ...props
}: AdaptiveContainerProps) {
  const { isMobile, isTablet, isDesktop } = useAdaptiveUI();
  
  // Determine current properties based on screen size
  const currentWidth = isMobile ? mobileWidth : isTablet ? tabletWidth : desktopWidth;
  const currentPaddingX = isMobile ? mobilePaddingX : isTablet ? tabletPaddingX : desktopPaddingX;
  const currentPaddingY = isMobile ? mobilePaddingY : isTablet ? tabletPaddingY : desktopPaddingY;
  const currentMarginX = isMobile ? mobileMarginX : isTablet ? tabletMarginX : desktopMarginX;
  const currentMarginY = isMobile ? mobileMarginY : isTablet ? tabletMarginY : desktopMarginY;
  const currentMaxWidth = isMobile && mobileMaxWidth 
    ? mobileMaxWidth 
    : isTablet && tabletMaxWidth 
      ? tabletMaxWidth 
      : isDesktop && desktopMaxWidth 
        ? desktopMaxWidth 
        : undefined;
  
  // Generate container width class
  const containerWidthClass = currentWidth === 'none' 
    ? '' 
    : currentWidth === 'full' 
      ? 'w-full' 
      : `container-${currentWidth}`;
  
  // Generate padding classes
  const paddingClasses = `px-${currentPaddingX} py-${currentPaddingY}`;
  
  // Generate margin classes
  const marginClasses = `mx-${currentMarginX} my-${currentMarginY}`;
  
  // Combine all classes
  const containerClasses = cn(
    containerWidthClass,
    paddingClasses,
    marginClasses,
    'transition-all duration-300',
    className
  );
  
  // Style for max-width
  const style = currentMaxWidth 
    ? { maxWidth: currentMaxWidth } 
    : undefined;
  
  return (
    <div className={containerClasses} style={style} {...props}>
      {children}
    </div>
  );
}

export default AdaptiveContainer;
