import React, { Component } from 'react';

const Search = (props) => {

    return (
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-group">
              <form onSubmit={props.onSubmit}>
                <input
                  type="text"
                  name="search"
                  value={props.query}
                  className="form-control form-control-lg mb-3"
                  autoFocus={true}
                  onInput={props.onInputChange} />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-success float-right" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Search;
