import React from "react";
import loginImg from "../../login.svg";
import Axios from "axios";
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      region: "",
      lastname: "",
      language: "",
      registered: "",
      background: "",
      expertise: "",
      password: "",
      
    };

    this.onChange = this.onChange.bind(this);
  
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitFunc() {
  
    let data = Axios({
      method: "post",
      url: "https://whispering-lake-75400.herokuapp.com/Register/interpreter",
      data: {
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        region: this.state.region,
        language: this.state.language,
        registered: this.state.registered,
        background: this.state.background,
        expertise: this.state.expertise,
        password: this.state.password,
      },
    });

    data
      .then((res) => {
        
        if (res) {
          setTimeout(() => {
            
            // alert(mssg);
            alert("Registered  in sucessfully")
            console.log(res)

          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Already Registered")
        // alert(mssg);
        
        console.log(err)
      });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">FirstName</label>
              <input
                type="text"
                name="firstname"
                placeholder="firstname"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">LastName</label>
              <input
                type="text"
                name="lastname"
                placeholder="lastname"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input
                type="text"
                name="region"
                placeholder="region"
                onChange={this.onChange}
                value={this.state.region}
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <input
                type="text"
                name="language"
                placeholder="language"
                onChange={this.onChange}
                value={this.state.language}
              />
            </div>
            <div className="form-group">
              <label htmlFor="registered">registered-mob</label>
              <input
                type="number"
                name="registered"
                placeholder="registered"
                onChange={this.onChange}
                value={this.state.registered}
              />
            </div>
            <div className="form-group">
              <label htmlFor="background">background</label>
              <input
                type="text"
                name="background"
                placeholder="background"
                onChange={this.onChange}
                value={this.state.background}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expertise">Expertise</label>
              <input
                type="text"
                name="expertise"
                placeholder="expertise"
                onChange={this.onChange}
                value={this.state.expertise}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={()=>{this.submitFunc()}}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
