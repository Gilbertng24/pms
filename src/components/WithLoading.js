import React from 'react';

function WithLoading(Component) {
  return function TmpFunc({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p className="fw-bold fs-6">
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithLoading;