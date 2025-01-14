import SearchResultItems from '../SearchResultItems/SearchResultItems';
import css from './SearchResults.module.css';

const SearchResults = ({ results }) => {
  return (
    <div className={css.resultList}>
      {results.map((result, id) => {
        return <SearchResultItems result={result} />;
      })}
    </div>
  );
};

export default SearchResults;
