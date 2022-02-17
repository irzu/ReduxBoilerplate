import React from "react";

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Record<string, unknown>, IState> {
    constructor(props)  {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Component not available</div>;
        }
        return this.props.children; 
    }
}

export default ErrorBoundary;
