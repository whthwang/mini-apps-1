import React from 'react';




class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  //what if we make this a counting system i? when i is even, toggle X, when i is odd, toggle O
  //problem: each square has its own state and it does not remember the other states that i clicked

  handleClick(e) {
    this.setState({
      clicked: this.state.clicked + 1
    })
    console.log(e.target.id);
    console.log(e.target.value);
  }

  render() {
    return (
      <span>
        {/* {this.state.clicked ? <X handleClick={this.handleClick} /> : <O handleClick={this.handleClick} />} */}
        {/* {this.state.clicked === 0 ? <RenderSquare handleClick={this.handleClick} text={this.state.clicked}/> : this.state.clicked % 2 === 0 ? <RenderSquare handleClick={this.handleClick} text={this.state.clicked} /> : <RenderSquare handleClick={this.handleClick} text={this.state.clicked} />} */}
        <RenderSquare handleClick={this.handleClick} text={this.state.clicked} />
      </span>
    )
  }
}


const X = (props) => {
  return (
    <span>
    <button onClick={props.handleClick}>X</button>
    </span>
  )
}

const O = (props) => {
  return (
    <span>
      <button onClick={props.handleClick}>O</button>
    </span>
  )
}

const RenderSquare = (props) => {
  return (
    <span>
      <button onClick={props.handleClick}>{props.text === 0 ? null : props.text % 2 === 0 ? 'X' : 'O'}</button>
    </span>
  )
}
// {props.state.clicked === 0 ? null : this.state.clicked % 2 ===}

const BlankSquare = (props) => {
  return (
    <span>
      <button onClick={props.handleClick}></button>
    </span>
  )
}



export default Square;