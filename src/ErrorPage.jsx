import React from "react";

function ErrorPage({ statusText, message }) {
  return (
    <div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
