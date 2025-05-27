import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingFallbackProps {
    className?: string;
    message?: string;
}

export function LoadingFallback({ className, message = 'Loading 3D scene...' }: LoadingFallbackProps) {
    return (
        <div className={cn(
            'flex min-h-[400px] w-full items-center justify-center bg-background/50 backdrop-blur-sm',
            className
        )}>
            <div className="flex flex-col items-center gap-4">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="text-sm text-muted-foreground">{message}</p>
            </div>
        </div>
    );
} 