import * as React from 'react';
import './SearchBox.scss';
import { connect } from 'react-redux';
import { filterBooks } from '../../redux/actions';

type SearchBoxProps = {
  handleSearch: (term: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {
  const [term, setTerm] = React.useState('');
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(term);
    }
  };
  return (
    <div className="search-box">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search in the bookstore"
          aria-label="Search"
          aria-describedby="button-addon2"
          onKeyDown={handleEnterKey}
          onChange={getValue}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary search-btn"
            type="button"
            id="button-addon2"
            onClick={() => handleSearch(term)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  handleSearch: filterBooks,
};

export default connect(null, mapDispatchToProps)(SearchBox);
