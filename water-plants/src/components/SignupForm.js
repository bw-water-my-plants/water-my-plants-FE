import React, { Component } from "react";



class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        phonenumber: "",
        password: "",
        email: ""
    };
  }
  onChange = (e) => {
      this.setState({ 
          [e.target.name]: e.target.value 
      })

  }

  onSubmit = (e) => {
      e.preventDefault()
    this.props.userSignupRequest(this.state)
     
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange} />
          <label htmlFor="phonenumber" >Tel</label>
          <input type="tel" value={this.state.phonenumber} name="phonenumber" onChange={this.onChange} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.onChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
         
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

 

export default SignupForm;
