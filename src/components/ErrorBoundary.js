import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  //Adding this lifecycle method makes it an error boundary class, this method will be triggered whenever one of the child components throws an error
  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
