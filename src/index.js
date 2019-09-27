import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./Header";
import FbButton from "./FbButton";

class App extends Component {
  state = {
    like: 0,
    dislike: 0,
    data: null,
    name: ""
  };

  componentWillMount() {
    console.log(" App:willMount start 1");
  }

  componentDidMount() {
    this.txt1.focus();
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(result => result.json())
      .then(result => this.setState({ data: result }))
      .catch(err => {
        console.log(err);
      });
    console.log("App: didMount start 3");
  }

  render() {
    const { data } = this.state;
    console.log("App: render start 2");
    return (
      <div className="App">
        <Header title="I am Header" like={this.state.like} />
        <h4>Like: {this.state.like}</h4>
        <h4>DisLike: {this.state.dislike}</h4>
        <FbButton handleClick={this.onLike} caption="Like" />
        <FbButton handleClick={this.onDisLike} caption="Dislike" />
        <input
          type="text"
          ref={input => {
            this.txt1 = input;
          }}
        />
        <input
          type="text"
          ref={input => {
            this.txt2 = input;
          }}
        />
        {data &&
          data.map(d => {
            return (
              <div key={d.id}>
                <div>
                  <b>{d.title}</b>
                </div>
                <div>{d.body}</div>
              </div>
            );
          })}

        <p />
        <h3>Form</h3>
        <p />
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="enter Name"
              //value={this.state.name}
              defaultValue={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={this.handleClick}>Change Text</button>
      </div>
    );
  }

  onLike = () => {
    this.setState(prevState => {
      return {
        like: prevState.like + 1
      };
    });

    this.setState(prevState => {
      return {
        like: prevState.like + 1
      };
    });
  };

  onDisLike = () => {
    this.setState({ dislike: this.state.dislike - 1 });
  };

  handleClick = e => {
    this.setState({ name: "I am React" });
  };

  handleChange = e => {
    console.log(e.target.value);
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/* 
   เมื่อ state เปลียนจะ render อัตโนมัติ
   ข้อแนะนำคือ componentDisMount() คือ method ที่จะได้ใช้งานบ่อยที่สุดเพราะ method นี้จะทำงานหลัง render 
   เสร็จแล้วจึงนิยมใช้ componentDidMount() ในการทำงานต่างๆ เช่นการ fetchdata เป็นต้น
 */
