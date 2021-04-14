import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const I = styled.img`
  vertical-align: middle;
  width: 153px;
  margin-left: 590px;
  border-style: none;
`;
const Headdiv = styled.div`
  margin-left: 85px;
  margin-top: 33px;
  font-size: 37px;
`;
const Heading = styled.div`
  margin-left: 476px;
`;
const Fullname = styled.div`
  margin-left: 576px;
  margin-top: 63px;
`;
const Emaildiv = styled.div`
  margin-left: 576px;
  margin-top: 30px;
`;
const Mobilediv = styled.div`
  margin-left: 576px;
  margin-top: 30px;
`;
const Passworddiv = styled.div`
  margin-left: 576px;
  margin-top: 30px;
`;
const Confirmpassword = styled.div`
  margin-left: 576px;
  margin-top: 30px;
`;
const Input1 = styled.input`
  // margin-bottom: 20px;
`;
const Input2 = styled.input`
  // margin-bottom: 20px;
`;
const Input3 = styled.input`
  // margin-bottom: 20px;
`;
const Input4 = styled.input`
  // margin-bottom: 20px;
`;
const Input5 = styled.input`
  // margin-bottom: 20px;
`;
const Button = styled.button`
  margin-left: 608px;
  margin-top: 29px;
  font-size: 55px;
  width: 106px;
  height: 31px;
`;
const Maindiv = styled.div``;
class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      mobile: "",
      conform_password: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMobile = this.changeMobile.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.changeconformpassword = this.changeconformpassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changeMobile(event) {
    this.setState({
      mobile: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  changeconformpassword(event) {
    this.setState({
      conform_password: event.target.value,
    });
  }
  ////onsubmit
  onSubmit(event) {
    // try {
    //   console.log("data is fetch");
    event.preventDefault(); //this makes tha form to came to its intial state..refreshes.

    const registered = {
      // fullname: "a",
      // email: "a",
      // mobile: "1",
      // password: "1 ",
      // conform_password: "1",
      fullName: this.state.fullName,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password,
      conform_password: this.state.conform_password,
    };
    // console.log("print mee");
    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));
    // console.log("print hjkhjkhkjhjkhj");
    this.setState({
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      conform_password: "",
    });
    // } catch {
    //   console.log("Error");
    // }
  }

  render() {
    return (
      <div>
        <Headdiv>
          <Heading>LOGIN PAGE</Heading>
        </Headdiv>
        <I src="./login.png"></I>
        <form onSubmit={this.onSubmit}>
          <Fullname className="Full_Name">
            <Input1
              type="text"
              placeholder="Enter your FullName"
              onchange={this.changeFullName}
              //value={this.state.fullName}
            />
            <br />
          </Fullname>
          <Emaildiv classname="E-mail">
            <Input2
              type="text"
              placeholder="Enter your E-mail"
              onchange={this.changeEmail}
              // value={this.state.email}
            />
            <br />
          </Emaildiv>
          <Mobilediv>
            <Input3
              type="text"
              placeholder="Enter your ph-no."
              onchange={this.changeMobile}
              // value={this.state.mobile}
            />
            <br />
          </Mobilediv>
          <Passworddiv>
            <Input4
              type="password"
              placeholder="Enter your password"
              onchange={this.changepassword} //can be named as ur function name..
              // value={this.state.password}
            />
            <br />
          </Passworddiv>
          <Confirmpassword>
            <Input5
              type="password"
              placeholder="Enter Confirm-password"
              onchange={this.changeconformpassword}
              // value={this.state.conform_password}
            />
            <br />
          </Confirmpassword>
          <input type="Submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;
