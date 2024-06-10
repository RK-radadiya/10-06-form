import React, { Component } from 'react'

 export class Ragister extends Component {
    constructor(props){
        super(props)

        this.props = props;
    }
  render() {

    let btntext, passwordtype;
    let btnclass =["btn","ms-3"]

    if(this.props.isPassword === true){
        passwordtype ="text"
        btntext ="Hide Password"
        btnclass.push("btn-danger")
    }else{
        passwordtype ="password"
        btntext ="Show Password"
        btnclass.push("btn-success")
    }
    return (
      <div>
        <form className='mx-auto w-50 mt-3' onSubmit={this.props.submit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name"className="form-control" placeholder='Enter Your Name'></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email"className="form-control" placeholder='Enter Your Email'></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type={passwordtype} name="password" className="form-control" placeholder='Enter Your Password'></input>
            </div>
            <div className="mb-3">
                <input type='submit' className='btn btn-primary'></input>
                <input type='button' className={btnclass.join(" ")} value={btntext} onClick={this.props.changePass}></input>
            </div>
            <div>
                <h3>Name : {this.props.name}</h3>
                <h3>Email : {this.props.email}</h3>
                <h3>Password : {this.props.password}</h3>
            </div>
        </form>
      </div>
    )
  }
}

export default Ragister