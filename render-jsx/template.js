import {Component} from './component.js'
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
