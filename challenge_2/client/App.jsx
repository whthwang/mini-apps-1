import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    console.log('all components mounted yayzo');
  }


  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value
    })
  }

  handleClick(e) {
    console.log('clicky!');
    this.post();
    //when clicked this invokes the post request
  }


  post() {
    console.log(this.state.query);
    axios.post('/api', {
      query: JSON.stringify(this.state.query)
    })
    .then(response => console.log('hello'))
    .catch(error => console.log(error))
  }


  // get(req, res) { i am not even sending a get 
  //   const { query } = req.body;
  //   axios.get('/api', {
  //     query: query
  //   })
  // }

  render() {
    return (
      <div>
      <textarea rows='4' cols='50' onChange={this.handleChange}></textarea>
      <button onClick={this.handleClick}>Get CSV </button>
      </div>
    )
  }
}



export default App;