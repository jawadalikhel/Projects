import React, {Component} from 'react';

const Display = (props) =>{
  console.log(props, 'DATATA')
    const display = props.data.map((item, i) =>{
    return(
      <div key={i}>
        <h3>{item.name}</h3>
      </div>
    );
  })

  return(
    <div>
      {display}
    </div>
  )
}
export default Display;
