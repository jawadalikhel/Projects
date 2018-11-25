import React, {Component} from 'react';

class Search extends Component{
  render(){
    return(
      <div>
        <h1>Search</h1>
        <form>
          <input type="text" placeholder='Search Giphy' />
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
