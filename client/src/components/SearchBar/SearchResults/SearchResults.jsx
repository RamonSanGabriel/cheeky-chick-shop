import React from 'react';

const SearchResults = ({ results, array }) => {
  return (
    <div>
      {/* <h2>{results.title}</h2> */}

      {results.map((result, id) => (
        <div key={id}>
          <img src={result.images} alt="product image" />
          {/* <SearchResults results={results} /> */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
