import React from 'react';
import logo from './logo.svg';
import './App.css';
import { notEqual } from 'assert';

export default class App extends React.Component   {
  constructor(props){
    super(props);
    this.state = {
      stickies: [
        {message: "note 1"},
        {message: "note 2"}
      ]
    };
    this.addNote = this.addNote.bind(this);
  }
addNote(note){
  const previousStickies = this.state.stickies;
  previousStickies.push({message:note})
  this.setState({
    stickies: previousStickies
  })
}
  render(){
    return(
      <div className="container">
        

{/*
<Stickie message="hellowwww"/>*/}

{this.state.stickies.map(note=>{ 
  return <Stickie message={note.message }/>;

})}

<AddStickie addNote={this.addNote} />

      </div>

  )
   

 
     
  }
}

class Stickie extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:props.message,
      counter: 0
    }
this.handleClick = this.handleClick.bind(this);

  }
handleClick(){
this.setState(state => ({
  counter: this.state.counter +1
}

));

}
render(){
  return (
    <div className="stick" onClick={this.handleClick}
    >
<h2> {this.state.message}</h2>
<h4> {"clicked" + this.state.counter + "times"

}

</h4>
    </div>



  ) 
}


}

class AddStickie extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newStickieContent:""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeStickie = this.writeStickie.bind(this);
  }
  handleUserInput(e){
    this.setState({
      newStickieContent: e.target.value
    });
    console.log(this.state.newStickieContent);
  }

writeStickie(){
  this.props.addNote(this.state.newStickieContent);
  this.setState({newStickieContent:""});
}

  render(){
return(
  <div className="form">
<input placeholder="write stickie" 
value={this.state.newStickieContent}
onChange={this.handleUserInput}></input>
  <button onClick={this.writeStickie}>add stickie</button>
<p> hellowkes</p>

  </div>
  
);

  }
}
//export default App;
