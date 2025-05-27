import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ThreeErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

interface ThreeErrorBoundaryProps {
    className?: string;
    children: React.ReactNode;
}

export class ThreeErrorBoundary extends React.Component<ThreeErrorBoundaryProps, ThreeErrorBoundaryState> {
    constructor(props: ThreeErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ThreeErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={cn(
                    'flex min-h-[400px] w-full flex-col items-center justify-center gap-4 bg-background/50 backdrop-blur-sm p-4',
                    this.props.className
                )}>
                    <p className="text-destructive font-semibold">Failed to load 3D scene</p>
                    <p className="text-sm text-muted-foreground text-center max-w-md">
                        {this.state.error?.message || 'An unexpected error occurred while rendering the 3D scene.'}
                    </p>
                    <Button
                        variant="outline"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
} 