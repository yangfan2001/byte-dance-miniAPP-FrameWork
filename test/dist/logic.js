addEventListener('message', function (e) {
    postMessage('You said: ' + e.data);
}, false);
const render = (vdom, parent) => {
    postMessage(vdom, parent);
};
const createApp = () => {
    postMessage('createApp');
};
createApp();

const jsx = 213;

console.log(jsx);