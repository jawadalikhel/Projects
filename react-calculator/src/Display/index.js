import React, {Component} from 'react';

class Display extends Component{
  render(){
        const string = this.props.data.join('')
        console.log(this.string, ' STRING')
        return(
          <div className="Display">
            {string}
          </div>
        )
  }
}

export default Display;
