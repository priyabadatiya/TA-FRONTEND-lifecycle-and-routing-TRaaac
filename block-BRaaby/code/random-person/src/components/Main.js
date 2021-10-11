import React from "react";
import User from "User";

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        new: false,
        valuetoDisplay: '',
        valueTitle: '',
        value: '',
      };
    }
    componentDidMount() {
      fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            user: data.results[0],
            valuetoDisplay: '',
            valueTitle: '',
            value: '',
          })
        );
    }
    getRandomUser = () => {
      fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({ 
              user: data.results[0],
              valueToDisplay: "",
              valueTitle: "",
              value: "" 
          });
        });
    };
  
    handleChange = (content) => {
      console.log(this.state.data);
      let fullName =
        this.state.user.name.title +
        ' ' +
        this.state.user.name.first +
        ' ' +
        this.state.user.name.last;
  
      switch (content) {
        case 'user':
          this.setState({
            valueTitle: 'My Name is',
            value: fullName,
          });
          break;
        case 'mail':
          this.setState({
            valueTitle: 'Email Address',
            value: this.state.user.email,
          });
          break;
  
        case 'dob':
          this.setState({
            valueTitle: 'Age is',
            value: this.state.user.dob.age,
          });
          break;
  
        case 'address':
          this.setState({
            valueTitle: 'Address is',
            value:
              this.state.user.location.street.number +
              ', ' +
              this.state.user.location.street.name +
              ', ' +
              this.state.user.location.city +
              ', ' +
              this.state.user.location.country,
          });
          break;
  
        case 'phone':
          this.setState({
            valueTitle: 'Phone No. is',
            value: this.state.user.phone,
          });
          break;
  
        default:
          break;
      }
      this.setState({ valueToDisplay: content });
    };
  
    render() {
      if (!this.state.user) {
        return <h1>Loading...</h1>;
      } else {
        return (
          <div className="main-div">
              <header></header>
              <main>
            <User
              user={this.state.user}
              valuetoDisplay={this.state.valuetoDisplay}
              valueTitle={this.state.valueTitle}
              value={this.state.value}
              getRandomUser={this.getRandomUser}
              handleChange={this.handleChange}
            />
            </main>
          </div>
        );
      }
    }
  }
  
  export default Main;