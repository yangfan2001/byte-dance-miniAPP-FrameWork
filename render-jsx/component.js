import {patch} from "./render.js";
export class Component {
    constructor(props) {
        this.props = props || {};
        this.state = null;
    }

    setState(nextState) {
        this.state = Object.assign(this.state, nextState)
        if(this.dom && this.shouldComponentUpdate(this.props, nextState)) {
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