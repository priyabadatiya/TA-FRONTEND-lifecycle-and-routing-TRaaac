import React,{Component} from "react";
import Loader from "./Loader";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      data: "",
      value: ""
    }
  }

  componentDidMount = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data, value: "" }));
  }

  display = () => {
    let value = this.state.value;
    let data = this.state.data;
    switch (value) {
      case "":
        return (
          <>
            <h2 className="text-xl">My Name is</h2>
            <h4 className="text-3xl p-2 font-bold">{data.results[0].name.first + " " + data.results[0].name.last}</h4>
          </>
        )
        break;
      case "mail":
        return (
          <>
            <h2 className="text-xl">My Email is</h2>
            <h4 className="text-3xl p-2 font-bold">{data.results[0].email}</h4>
          </>
        )
        break;
      case "phone":
        return (
          <>
            <h2 className="text-xl">My Phone Number is</h2>
            <h4 className="text-3xl p-2 font-bold">{data.results[0].phone}</h4>
          </>
        )
        break;
      case "street":
        return (
          <>
            <h2 className="text-xl">My Street is</h2>
            <h4 className="text-3xl p-2 font-bold">{data.results[0].location.street.number + " " + data.results[0].location.street.name}</h4>
          </>
        )
        break;
      case "city":
        return (
          <>
            <h2 className="text-xl">My City is</h2>
            <h4 className="text-3xl p-2 font-bold">{data.results[0].location.city}</h4>
          </>
        )
        break;
      default:
        break;
    }
  }
  render() {
    let data = this.state.data;
    console.log(data);
    if (!data) {
      return <Loader />
    }
    return (

      <main className="h-screen flex justify-center items-center">
        <section className="rounded-lg bg-white w-1/2 shadow-custom">
          <div className="bg-blue-200 p-4">
            <img src={data ? data.results[0].picture.large : "/img1.png"} className="w-40 h-40 object-cover rounded-full block mx-auto relative top-16" />
          </div>
          <div className="mt-20 text-center pb-8">
            {
              this.display()
            }
            <div className="flex px-8 mt-12">

              <div className="flex-20">
                <i className="text-2xl text-center fas fa-envelope-open" onMouseOver={
                  () => this.setState({ value: "mail" })
                }></i>
              </div>
              <div class="flex-20">
                <i className="text-2xl text-center fas fa-phone-alt" onMouseOver={
                  () => this.setState({ value: "phone" })
                }></i>
              </div>
              <div className="flex-20">
                <i className="text-2xl text-center fas fa-street-view" onMouseOver={
                  () => this.setState({ value: "street" })
                }></i>
              </div>
              <div className="flex-20">
                <i className="text-2xl text-center fas fa-city" onMouseOver={
                  () => this.setState({ value: "city" })
                }></i>
              </div>

            </div>
            <button className="bg-blue-500 px-4 py-2 text-white mt-8 rounded-md" onClick={this.componentDidMount}
            >{data ? "Random User" : "Loading..."}</button>
          </div>
        </section>
      </main>
    )
  }
}

export default Main;