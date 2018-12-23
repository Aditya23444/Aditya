import React, { Component } from 'react';

import './App.css';


class App extends Component {

  state={
    userName: '',
    password: ''
  };

  setUserName(evt) {
    this.setState({
        ...this.state,
        userName: evt.target.value
    });
  }

  setPassword(evt) {
    this.setState({
        ...this.state,
        password: evt.target.value
    });
  }


  btnClick() {
    if (this.state.userName && this.state.password) {
        console.log(this.state);
        this.setState({
            ...this.state,
            userName: '',
            password: ''
        });
         window.location.href = 'https://www.google.co.in/';
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="form">
            <form className="formfields" >
              <h2><u>REGISTRATION FORM</u></h2>
              <div className="formfield">
                <label className="formfields_label1" htmlFor="name"><b>User Name </b></label>
                <input
                  type="text"
                  value={this.state.userName}
                  onChange={this.setUserName.bind(this)}
                  className="formfield_input"
                  placeholder="Enter Your UserName" />
              </div>

              <div className="formfield">
                <label className="formfields_label1" htmlFor="name"><b>Password </b></label>
                <input 
                  type="password"
                  value={this.state.password}
                  onChange={this.setPassword.bind(this)}
                  className="formfield_input"
                  placeholder="Enter Your Password" />

              </div><br></br>
              <div className="formfield">
                <input type="button" id="btn" className="formfield-button" onClick={this.btnClick.bind(this)} value="Log in" />
              </div>

            </form>
          </div>

        </header>
      </div>
    );
  }
}

export default App;