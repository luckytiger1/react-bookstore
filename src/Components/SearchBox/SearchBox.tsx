import * as React from 'react';
import './SearchBox.scss';

export interface SearchBoxProps {
  handleSearch: () => void;
  handleEnterKey: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchBox({
  handleSearch,
  handleEnterKey,
}: SearchBoxProps) {
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
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary search-btn"
            type="button"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
