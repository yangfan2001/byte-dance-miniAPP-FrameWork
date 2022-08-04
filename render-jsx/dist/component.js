import { patch, render, createElement } from "./render.js";
import { eventHandler } from "./main.js";
export class Component {
  constructor(props) {
    this.props = props || {};
    this.state = null;
  }

  setState(nextState) {
    this.state = Object.assign(this.state, nextState);

    if (this.dom && this.shouldComponentUpdate(this.props, nextState)) {
      patch(this.dom, this.render());
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state;
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  componentWillUnmount() {}

}
import { useWorker } from "./logic.js";
export class Count extends Component {
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

  reaction() {
    useWorker(() => {
      let res = 0;

      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          res += i + j;
        }
      }

      return res;
    }).then(res => console.log(res));
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
    }, "sub"), createElement("button", {
      onClick: this.reaction
    }, "reaction(\u7528wb\u8FDB\u884C\u7B80\u5355\u4F46\u8017\u65F6\u7684\u8BA1\u7B97\u903B\u8F91)"));
  }

}