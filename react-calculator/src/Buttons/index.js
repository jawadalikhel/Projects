import React, {Component} from 'react';

class Buttons extends Component{
  render(){
    return(
      <div>
        <h1>Buttons</h1>

        <div className="Buttons">{this.props.children} </div>
      </div>
    )
  }
}

export default Buttons;
