import React, { Component } from "react";
import axios from 'axios'

class Doggopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }

    // this.handleSave=this.handleSave.bind(this)
    // this.handleMessage=this.handleMessage.bind(this)
  }



// handleSave(val){
//   axios.put('/api/put', this.state.message)
//   .then((res)=>{
//   this.setState({message: val})
//   })
// }
  render(){
  
      return(
          <div className='doggopic'>
          <img className='pics-on-screen' src={this.props.dog} alt=""/>
          <img className='pics-on-screen' src={this.props.cat} alt=""/>
          <p className='quote-on-screen'>{this.props.quote}</p> <br/>
          <p className='quote-on-screen'>{this.props.author}</p>

            <textarea placeholder='Type your thoughts here:' onChange={this.handleMessage} name="" id="messageBox" cols="50" rows="20"></textarea>
            <button onClick={this.props.handleSave}>Save</button> 
            {/* <button onClick={this.handleEdit}>Edit</button> */}
            <button onClick={()=>this.props.delete()}>Delete</button>
            
          </div>  
        
      )
  }
}

export default Doggopic;
