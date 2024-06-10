import React, { Component } from 'react'
import Ragister from './Componant/Ragister'

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      name:null,
      email:null,
      password:null,
      isPassword:false
    }
  }
  formSubmitHander = (e) =>{
    e.preventDefault();
    // alert("kajal")
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    this.setState({
      name : name,
      email :email,
      password :password
    })
  }
  passwordChangeHander = () =>{
    // alert("kajal")
    this.setState({
      isPassword : !this.state.isPassword
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Ragister name={this.state.name} email = {this.state.email} password = {this.state.password} submit={this.formSubmitHander} isPassword={this.state.isPassword} changePass={this.passwordChangeHander}></Ragister>
      </div>
    )
  }
}

export default App
