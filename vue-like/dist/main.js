/* 主线程：渲染线程*/

// 逻辑线程
let myWorker = new Worker('logic.js');
const data = {
    created: false
};

myWorker.onmessage = function (event) {
    // 接收
    console.log('Received message ' + event.data);
    switch (event.data) {
        case 'createApp':
            myWorker.postMessage(createApp());
    }
};
// create the App
const createApp = () => {
    if (data.created) // the app has already been created
        return false;
    data.created = true;
    // create the root node
    const root = document.createElement("div");
    root.id = 'AppRoot';
    return root;
};

function isTextVdom(vdom) {
    return typeof vdom == 'string' || typeof vdom == 'number';
}

function isElementVdom(vdom) {
    return typeof vdom == 'object' && typeof vdom.type == 'string';
}

const render = (vdom, parent = null) => {
    const mount = parent ? el => parent.appendChild(el) : el => el;
    if (isTextVdom(vdom)) {
        return mount(document.createTextNode(vdom));
    } else if (isElementVdom(vdom)) {
        const dom = mount(document.createElement(vdom.type));
        for (const child of [].concat(...vdom.children)) {
            // children 元素也是 数组，要拍平
            render(child, dom);
        }
        for (const prop in vdom.props) {
            setAttribute(dom, prop, vdom.props[prop]);
        }
        return dom;
    } else {
        throw new Error(`Invalid VDOM: ${vdom}.`);
    }
};

function isEventListenerAttr(key, value) {
    return typeof value == 'function' && key.startsWith('on');
}

function isStyleAttr(key, value) {
    return key == 'style' && typeof value == 'object';
}

function isPlainAttr(key, value) {
    return typeof value != 'object' && typeof value != 'function';
}

const setAttribute = (dom, key, value) => {
    if (isEventListenerAttr(key, value)) {
        const eventType = key.slice(2).toLowerCase();
        dom.addEventListener(eventType, value);
    } else if (isStyleAttr(key, value)) {
        Object.assign(dom.style, value);
    } else if (isPlainAttr(key, value)) {
        dom.setAttribute(key, value);
    }
};

const createElement = (type, props, ...children) => {
    if (props === null) props = {};
    return { type, props, children };
};