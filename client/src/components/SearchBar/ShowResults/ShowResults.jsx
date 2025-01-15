import React from 'react';

const ShowResults = ({ result, results }) => {
  return (
    <div>
      {/*  <div>{result.title}</div>
      <div>{result.images}</div>
      <div>{result.stock}</div> */}

      <div>{results.title}</div>
      <div>{results.images}</div>
      <div>{results.stock}</div>
      {/* <div>A</div>
      <div>B</div>
      <div>C</div> */}
    </div>
  );
};

export default ShowResults;
