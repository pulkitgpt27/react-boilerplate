import React from 'react';
import ErrorBoundary from './ErrorBoundary';
export default {
  title: "ErrorBoundary"
};

const BuggyComponent = () => {
  const arr: any=null;
  return(
    <div>{arr.map((val: any) => val)}</div>
  );
}

export const Deafault = () => {
  return (
    <>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <div>Hey Im Without bug and still standing</div>
    </>
  );
}