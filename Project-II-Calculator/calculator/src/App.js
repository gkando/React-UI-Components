import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'





class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentInput: 0,
      result: 0
    };
    this.handleInput = this.handleInput.bind(this);
  }



  handleInput = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
    }
  }

render() {
    return (
      <div className='calc-container'>
        <CalculatorDisplay input={this.state.currentInput}/>
        <div className='btn-container'>
          <ActionButton />
          <NumberButton />
        </div>
      </div>
    )
  }
}

export default App;





// const App = () => {

//   return (
//     <div className='calc-container'>
//       <CalculatorDisplay value={this.state.next || this.state.total || "0"} />
//       <div className='btn-container'>
//         <ActionButton />
//         <NumberButton />
//       </div>
//     </div>
//   );
// };

// export default App;
