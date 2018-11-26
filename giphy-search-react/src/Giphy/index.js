import React, {Component} from 'react';

import Display from './Display';
import Search from './Search';

class Giphy extends Component{
  constructor(){
    super();
    this.state = {
      giphyState: false,
      GiphyData: [],
    }
  }

  getGiphy = async (e) =>{
    e.preventDefault();
    const search = e.target.elements.search.value;
    console.log(search, 'this is SEARCH')
    try {
      const giphyApi = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&limit=20&api_key=WtnalXjzVokzCR138YmcmfhJY0t2aLPZ`);
      const giphyJson = await giphyApi.json();
      console.log(giphyApi, ' APIIII')

      this.setState({
        GiphyData: giphyJson
      })

    } catch (err) {
      console.log(err, ' error in getGiphy')
    }
  }
  render(){
    console.log(this.state, 'this is the STATE')

    return(
      <div>
        {console.log(this.getGiphy())}
        <h1>Main Page</h1>
        <Search />
        <Display />
      </div>
    )
  }
}

export default Giphy;
