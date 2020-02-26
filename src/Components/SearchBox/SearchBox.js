import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.scss';

export default function SearchBox({ handleSearch }) {
  return (
    <div className="search-box">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search in the bookstore"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
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

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
