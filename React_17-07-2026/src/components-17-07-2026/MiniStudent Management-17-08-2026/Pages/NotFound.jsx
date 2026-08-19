import React from "react";

import {
  Link
} from "react-router-dom";

class NotFound extends React.Component {

  render() {

    return (
      <div>

        <h1>
          404
        </h1>

        <h2>
          Page Not Found
        </h2>

        <Link to="/">
          Go Home
        </Link>

      </div>
    );
  }
}

export default NotFound;