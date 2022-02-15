import React, { Component } from 'react'
import Example from './ErrorComponent'

export class ErrorBoundary extends Component {
    constructor ( props ) {
        console.log( props )
        super( props )
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError ( error ) {
        return {
            hasError: true
        }
    }

    componentDidCatch ( error, errorInfo ) {
        console.log( error, errorInfo )
    }
    render () {
        if ( this.state.hasError ) {
            return <Example />
        }
        return this.props.children

    }
}

export default ErrorBoundary
