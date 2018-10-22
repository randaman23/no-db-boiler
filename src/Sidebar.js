import React, { Component } from "react";
import axios from 'axios'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render(){
      console.log(this.props)
      return(
          <div className='sidebar'>
              <h1>Pick a doggo or a kitter,
                and don't forget to grab a quote. </h1><br/>
              <img className='images' src={this.props.doggoImage} alt=""/>
              <img className='images' src={this.props.cattoImage} alt=""/>
              <p id='quote'>{this.props.quote} <br/> <br/>
               <br/> {this.props.author}</p>
              <button className='buttons' onClick={this.props.getDoggo}>New Doggo</button>
              <br/>
              <button className='buttons' onClick={this.props.getQuote}>New Quote</button>
              <br/>
              <button className='buttons' onClick={this.props.getCatto}>New Kitter</button>
              <br/>
              <button className='buttons' onClick={this.props.handleSave}>Save</button>
          </div>   
      )
  }
}


export default Sidebar;
