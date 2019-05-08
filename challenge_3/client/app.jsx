import React from 'react';
import ReactDOM from 'react-dom';

//i need to set up a variable for the different endpoints
/*
(`${commonPath}/f1`)
(`${commonPath}/f2`)
(`${commonPath}/f3`)
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
  }

  componentDidMount() {
    console.log('all components mounted yay');
  }

  handleCheckOutClick(e) {

  }

  render() {
    return (
      <div>
        <button>Let's start the checkout process!</button>
      </div>
    )
  }
}


class AccountCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}





ReactDOM.render(<App />, document.getElementById('app'));
export default App;

