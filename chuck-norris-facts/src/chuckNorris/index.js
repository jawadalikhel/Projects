import React, {Component} from 'react';
import Display from './Display';
class Chuck extends Component{
  state = {
    facts: '',
  }
  async componentDidMount(){
    const api =  await fetch('https://api.chucknorris.io/jokes/random');
    const apiJson = api.json();
    console.log(apiJson, 'apiJson')
    this.setState({
      facts: apiJson
    })
  }
  render(){
    console.log(this.state.facts.value,  'faaaacts')
    return(
      <div>
        <Display display={this.state.facts}/>
      </div>
    )
  }
}
export default Chuck;
