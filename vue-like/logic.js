addEventListener('message', function (e) {
    postMessage('You said: ' + e.data);
}, false);
const render = (vdom,parent)=>{
    postMessage(vdom,parent)
}
const createApp = ()=>{
    postMessage('createApp')
}
createApp()


const jsx = <h1>123</h1>

console.log(jsx)



