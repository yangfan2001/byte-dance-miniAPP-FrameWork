import { Component } from './component.js';
import { render, createElement } from "./render.js";

class Demo extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    };
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleSub() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return createElement("div", {
      style: {
        fontsize: 40
      }
    }, "Total Count:", createElement("span", null, this.state.count), createElement("button", {
      onClick: this.handleAdd.bind(this)
    }, "add"), createElement("button", {
      onClick: this.handleSub.bind(this)
    }, "sub"));
  }

}

render(createElement(Demo, null), document.getElementById('app'));