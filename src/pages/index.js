import React from "react";

const fallback = <div />;
const Suspensed = (Element) =>
  function suspense(props) {
    return (
      <React.Suspense fallback={fallback}>
        <Element {...props} />
      </React.Suspense>
    );
  };

export default {
  Movies: Suspensed(React.lazy(() => import("./Movies"))),
};
