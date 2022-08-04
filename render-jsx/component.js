import {patch, render,createElement} from "./render.js";
import {eventHandler} from "./main.js";

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

import {useWorker} from "./logic.js";
export class Count extends Component{
    constructor(props) {
        super();
        this.state = {
            count:0
        }
    }
    handleAdd(){
        this.setState({
            count:this.state.count+1
        })
    }
    handleSub(){
        this.setState({
            count:this.state.count-1
        })
    }
    reaction(){
        useWorker(()=>{
            let res = 0
            for(let i=0;i<10;i++){
                for(let j=0;j<10;j++){
                    res += i+j
                }
            }
            return res
        }).then((res)=>console.log(res))
    }
    render(){
        return <div style={{fontsize:40}}>
            Total Count:<span>{this.state.count}</span>
            <button onClick={this.handleAdd.bind(this)}>add</button>
            <button onClick={this.handleSub.bind(this)}>sub</button>
            <button onClick={this.reaction}>reaction(用wb进行简单但耗时的计算逻辑)</button>
        </div>
    }
}


