'use client';

import * as React from 'react';
import { useAdaptiveUI } from '@/hooks/use-adaptive-ui';
import { cn } from '@/lib/utils';

interface AdaptiveSpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  // Spacing size for different screen sizes (using Tailwind spacing scale)
  mobileSize?: number;
  tabletSize?: number;
  desktopSize?: number;
  
  // Direction
  direction?: 'horizontal' | 'vertical';
  
  // Whether to hide on certain screen sizes
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
}

export function AdaptiveSpacing({
  className,
  mobileSize = 4,
  tabletSize = 6,
  desktopSize = 8,
  direction = 'vertical',
  hideOnMobile = false,
  hideOnTablet = false,
  hideOnDesktop = false,
  ...props
}: AdaptiveSpacingProps) {
  const { isMobile, isTablet, isDesktop } = useAdaptiveUI();
  
  // Check if the spacing should be hidden based on the current screen size
  if ((isMobile && hideOnMobile) || (isTablet && hideOnTablet) || (isDesktop && hideOnDesktop)) {
    return null;
  }
  
  // Determine current size based on screen size
  const currentSize = isMobile ? mobileSize : isTablet ? tabletSize : desktopSize;
  
  // Generate classes based on direction and size
  const spacingClasses = cn(
    direction === 'vertical' ? `h-${currentSize}` : `w-${currentSize}`,
    'transition-all duration-300',
    className
  );
  
  return <div className={spacingClasses} aria-hidden="true" {...props} />;
}

export default AdaptiveSpacing;
