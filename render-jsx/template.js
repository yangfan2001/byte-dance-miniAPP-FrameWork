import {Component,Count} from './component.js'
import {render,createElement} from "./render.js";

class Demo extends Component{
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
    render(){
        return <div style={{fontsize:40}}>
            Total Count:<span>{this.state.count}</span>
            <button onClick={this.handleAdd.bind(this)}>add</button>
            <button onClick={this.handleSub.bind(this)}>sub</button>
        </div>
    }
}

render(<Demo/>, document.getElementById('app'));



function Item(props) {
    return <li className="item" style={props.style} onClick={props.onClick}>{props.children}</li>;
}

function List(props) {
    return <ul className="list">
        {props.list.map((item, index) => {
            return <Item style={{ background: item.color }} onClick={() => alert(item.text)}>{item.text}</Item>
        })}
    </ul>;
}

const list = [
    {
        text: 'aaa',
        color: 'blue'
    },
    {
        text: 'ccc',
        color: 'orange'
    },
    {
        text: 'ddd',
        color: 'red'
    }
]

render(<List list={list}/>, document.getElementById('app'));

render(<Count/>, document.getElementById('app'));

