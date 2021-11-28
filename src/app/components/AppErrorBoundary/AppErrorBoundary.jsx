import { Component } from "react";
import ErrorPage from "../ErrorPage";

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorPage
          errorMessage={String(this.state.error) || "An unknown error occured"}
        />
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
