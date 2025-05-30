'use client';

import * as React from 'react';
import { useAdaptiveUI } from '@/hooks/use-adaptive-ui';
import { cn } from '@/lib/utils';

interface AdaptiveVisibilityProps {
  // Visibility for different screen sizes
  visibleOnMobile?: boolean;
  visibleOnTablet?: boolean;
  visibleOnDesktop?: boolean;
  
  // Children
  children: React.ReactNode;
  
  // Whether to render as a span (inline) or div (block)
  as?: 'span' | 'div';
  
  // Additional classes
  className?: string;
}

export function AdaptiveVisibility({
  visibleOnMobile = true,
  visibleOnTablet = true,
  visibleOnDesktop = true,
  children,
  as = 'div',
  className,
}: AdaptiveVisibilityProps) {
  const { isMobile, isTablet, isDesktop } = useAdaptiveUI();
  
  // Determine if the content should be visible based on the current screen size
  const isVisible = (isMobile && visibleOnMobile) || 
                    (isTablet && visibleOnTablet) || 
                    (isDesktop && visibleOnDesktop);
  
  if (!isVisible) {
    return null;
  }
  
  // Render the appropriate element based on the 'as' prop
  const Component = as;
  
  return (
    <Component className={cn('transition-all duration-300', className)}>
      {children}
    </Component>
  );
}

export default AdaptiveVisibility;
