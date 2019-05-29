import React from 'react';
import './Button.css';

const NumberButton = () => {

  function Welcome(props) {
    return <button className={props.buttonStyle} id={props.id} data-value={props.i}>{props.text}</button>;
  }


    let nums = []
    for (const i of Array(10).keys()) {
        nums.push(<Welcome buttonStyle='btn num white' key={i} id={`btn` + i} text={i}/>)
      }

    return (
      <>
             {nums}
      </>
    )
}

export default NumberButton;
