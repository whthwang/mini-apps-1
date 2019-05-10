import React from 'react';
import Square from './Squares.jsx';

class App extends React.Component { //App should do conditional rendering based on the state
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    }
  }

  render() {
    return (
      <div>
      <Square id="x0y0"/> 
      <Square id="x1y0"/>
      <Square id="x2y0"/> 
      <Square id="x3y0"/> 
      <Square id="x4y0"/>
      <Square id="x5y0"/> 
      <Square id="x6y0"/> 
      <br></br>
      <Square id="x0y1"/> 
      <Square id="x1y1"/>
      <Square id="x2y1"/> 
      <Square id="x3y1"/> 
      <Square id="x4y1"/>
      <Square id="x5y1"/> 
      <Square id="x6y1"/> 
      <br></br>
      <Square id="x0y2"/> 
      <Square id="x1y2"/>
      <Square id="x2y2"/> 
      <Square id="x3y2"/> 
      <Square id="x4y2"/>
      <Square id="x5y2"/> 
      <Square id="x6y2"/>  
      <br></br>
      <Square id="x0y3"/> 
      <Square id="x1y3"/>
      <Square id="x2y3"/> 
      <Square id="x3y3"/> 
      <Square id="x4y3"/>
      <Square id="x5y3"/> 
      <Square id="x6y3"/>  
      <br></br>
      <Square id="x0y4"/> 
      <Square id="x1y4"/>
      <Square id="x2y4"/> 
      <Square id="x3y4"/> 
      <Square id="x4y4"/>
      <Square id="x5y4"/> 
      <Square id="x6y4"/>  
      <br></br>
      <Square id="x0y5"/> 
      <Square id="x1y5"/>
      <Square id="x2y5"/> 
      <Square id="x3y5"/> 
      <Square id="x4y5"/>
      <Square id="x5y5"/> 
      <Square id="x6y5"/>   
      </div>
    )
  }
}



export default App;