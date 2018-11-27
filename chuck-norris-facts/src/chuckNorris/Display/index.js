import React, {Component} from 'react';

const Display = (props) => {
  console.log(props.display.value, 'propssss')
    return(
      <div>
        <h1>Chuck Norris Facts</h1>
        <div>{props.display.value}</div>
      </div>
    )
}
export default Display;
