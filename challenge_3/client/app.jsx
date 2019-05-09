import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    console.log('App mounted yay');
  }

  handleCheckOutClick(e) {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
    ReactDOM.render(<AccountCreation />, document.getElementById('accountcreation'));
  }
  

  render() {
    return (
      <div>
        <button onClick={this.handleCheckOutClick}>Start Checkout Here!</button>
      </div>
    )
  }
}


class AccountCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      password: ''
    }
    this.handleAcctCreationClick = this.handleAcctCreationClick.bind(this);
    this.handleAcctCreationChange = this.handleAcctCreationChange.bind(this);
  }

  f1post () {
    axios.post('/f1', {
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password
    })
    .then(() => {console.log('axios post works')})
    .catch(() => {console.log('axios post request failed')})
  }


  handleAcctCreationClick(e) {
    this.f1post();
    //before the components dismount, push into the database
    ReactDOM.unmountComponentAtNode(document.getElementById('accountcreation'));
    ReactDOM.render(<Shipping />, document.getElementById('shipping'));
  }

  handleAcctCreationChange(e) {
    console.log(this.state);
    let id = e.target.id;
    if (id === 'fullname') {
      this.setState({
        fullname: e.target.value
      })
    } else if (id === 'email') {
      this.setState({
        email: e.target.value
      })
    } else {
      this.setState({
        password: e.target.value
      })
    }
  }


  render() {
    return (
      <div>
        First, some personal information<br></br>
        Name
        <input id='fullname' onChange={this.handleAcctCreationChange} placeholder='full name here' />
        <br></br>
        Email
        <input id='email' onChange={this.handleAcctCreationChange} placeholder='email here' />
        <br></br>
        Password
        <input id='password' type='password' placeholder='password here' onChange={this.handleAcctCreationChange}/>
        <button onClick={this.handleAcctCreationClick}>NEXT --> SHIPPING</button>
      </div>
    )
  }
}

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleShippingClick = this.handleShippingClick.bind(this);
  }

  handleShippingClick(e) {

    ReactDOM.unmountComponentAtNode(document.getElementById('shipping'))
    ReactDOM.render(<Payment />, document.getElementById('payment'))

  }

  render() {
    return (
      <div>
        Enter your address here<br></br>
        <input id='line1' placeholder='address line 1' />
        <br></br>
        <input id='line2' placeholder='address line 2' />
        <br></br>
        <input id='city' placeholder='city' />
        <br></br>
        <input id='state' placeholder='state' />
        <br></br>
        <input id='zipCode' placeholder='zip code' />
        <br></br>
        <input id='phoneNum' type='number' placeholder='phone number' />
        <br></br>
        <button onClick={this.handleShippingClick}>NEXT --> PAYMENT</button>
      </div>
    )
  }
}



class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handlePaymentClick(e) {
    ReactDOM.unmountComponentAtNode(document.getElementById('payment'));
    ReactDOM.render(<Surprise />, document.getElementById('surprise'));
  }

  render() {
    return (
      <div>
        Payment Information<br></br>
        <input id='ccNum' placeholder='credit card number' /><br></br>
        <input id='cvv' placeholder='cvv' /><br></br>
        <input id='expdate' placeholder='exp date' /><br></br>
        <input id='billzip' placeholder='billing zip code' /><br></br>
        <button onClick={this.handlePaymentClick}>NEXT --> FINISH CHECKOUT</button>
      </div>
    )
  }
}

class Surprise extends React.Component {
  constructor(props) {
    super(props);
    this.handleSurpriseClick = this.handleSurpriseClick.bind(this);
  }
  handleSurpriseClick(e) {
    ReactDOM.unmountComponentAtNode(document.getElementById('surprise'))
    ReactDOM.render(<SurpriseSummary />, document.getElementById('surprisesummary'));
  }

  handleNoSurpriseClick(e) {
    ReactDOM.unmountComponentAtNode(document.getElementById('surprise'))
    ReactDOM.render(<NoSummary />, document.getElementById('nosummary'))
  }

  render() {
    return (
      <div>
        Do you like surprises?<br></br>
        <button onClick={this.handleSurpriseClick}>I live for the surprise</button><br></br>
        <button onClick={this.handleNoSurpriseClick}>No thanks</button>
      </div>
    )
  }
}

const NoSummary = (props) => {
  return (
    <div>
      Here's the summary of your order
    </div>
  )
}

const SurpriseSummary = (props) => {
  return (
    <div>
      Life rewards those who live for the surprise. 10% discount applied!
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

