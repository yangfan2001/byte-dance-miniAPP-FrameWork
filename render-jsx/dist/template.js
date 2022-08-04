import { Component, Count } from './component.js';
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

function Item(props) {
  return createElement("li", {
    className: "item",
    style: props.style,
    onClick: props.onClick
  }, props.children);
}

function List(props) {
  return createElement("ul", {
    className: "list"
  }, props.list.map((item, index) => {
    return createElement(Item, {
      style: {
        background: item.color
      },
      onClick: () => alert(item.text)
    }, item.text);
  }));
}

const list = [{
  text: 'aaa',
  color: 'blue'
}, {
  text: 'ccc',
  color: 'orange'
}, {
  text: 'ddd',
  color: 'red'
}];
render(createElement(List, {
  list: list
}), document.getElementById('app'));
render(createElement(Count, null), document.getElementById('app'));