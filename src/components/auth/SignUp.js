import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import firebase from './../../config/config.js'

class SignUp extends Component {
constructor(props){
    super(props);
    this.database = firebase.database();
}
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    ifError: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(
        this.state.email, 
        this.state.password
      ).then(resp => {
        return this.database.ref('Users').child(resp.user.uid).update({
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            initials: this.state.firstName[0] + this.state.lastName[0],
                            password : this.state.password,
                            email : this.state.email
        });
      }).then(
          this.setState({
              ifError: "Berhasil ! Silahkan Login"
          })
      );
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              {this.state.ifError}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp