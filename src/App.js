import React, {Component} from 'react';
import './App.css';
import Image from './Cigar.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    fullName:"Hisham" ,
    profession:"General Manager" ,
    bio:"importer of Home Appliance", 
    image: Image,
    count: 0,
   show:false
  }
}

incrementCounter= () => {
  const {count} = this.state;
  count: this.setState ({count:count + 1})
}

componentDidMount(){
  setInterval(this.incrementCounter, 1000);
}


showProfil = ()=>{
this.setState({show: !this.state.show})
}

  render() { 
    return (  
    <div class='identity'>
      <button onClick={this.showProfil}>{this.state.show ? "Hide Profile" : "Show Profile"} </button>
      {this.state.show &&
      <div>  
      <h1> {this.state.fullName} </h1>
      <h3> {this.state.profession} </h3>
      <p> {this.state.bio} </p>
      <img src={this.state.image}></img>
      <h3>The component has been mount since</h3>
      <h2>{this.state.count}</h2>
      </div>
      }
    </div>
    );
  }
 }
 
export default App;


