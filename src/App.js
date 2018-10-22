import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './Header'
import Sidebar from './Sidebar'
import Doggopic from './Doggopic'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doggoImage: null,
      quote: null,
      author:null,
      cattoImage:null,
      saves: [],
      message:''
  
    }
    this.getDoggo=this.getDoggo.bind(this)
    this.getQuote=this.getQuote.bind(this)
    this.getCatto=this.getCatto.bind(this)
    this.handleSave=this.handleSave.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  componentDidMount(){
    axios.get('/api/get').then((res)=>{
    this.setState({message:res.data})
    })
  }

  handleMessage(e){()=>{
    this.setState({message:e.target.value})
  }}


  getDoggo() {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((res) => {
        // console.log(res.data.message)
        this.setState({ doggoImage: res.data.message })
      })
      .catch((err) => {
        console.log(`BERRORS `, err);
      })
    }

    handleSave(){
      let body = {dog:this.state.doggoImage,
                  cat:this.state.cattoImage,
                  quote:this.state.quote,
                  author:this.state.author,
                  comments:''}
        axios.post('/api/post', body).then((res)=>{
          // console.log(res.data)
          this.setState({saves:res.data})
        })
      }
    
    getCatto(){
      axios.get('https://aws.random.cat/meow')
      .then((res)=>{
        this.setState({cattoImage: res.data.file})
        // console.log('CATTO',res.data)
      
      })
    }
    
    getQuote(){
      axios.get('https://talaikis.com/api/quotes/random/')
      .then((res)=>{
        this.setState({quote: res.data.quote, author: res.data.author})
      })
    }

    handleDelete(){
      // console.log('handledeletefired')
      axios.delete('/api/delete/:id').then((res)=>{
        this.setState({saves: res.data})
      })
 }
    
  
    render() {
      let saves=this.state.saves.map((element,index)=>{
        return(
          <Doggopic dog={element.dog}
          quote={element.quote}
          author={element.author}
          cat={element.cat}
          key={index}
          delete={this.handleDelete}
          save={this.handleSave}/>
  
        )
      })  
    
    // console.log(this.state)
    return (
      <div className="App">
      <Header/>
      <div className='doggopic'>{saves}</div>
      
      <Sidebar 
       doggoImage={this.state.doggoImage}
       getDoggo={this.getDoggo} 
       cattoImage={this.state.cattoImage}
       getCatto={this.getCatto}
       getQuote={this.getQuote}
       quote={this.state.quote} 
       author={this.state.author} 
       handleSave={this.handleSave}
       />
        {/* <button onClick={() => this.handleNameUpdate()}>Update Name</button> */}
        {/* <h1>My name: {this.state.name}</h1> */}
        
           
      </div>
    );
  }
}

export default App;
