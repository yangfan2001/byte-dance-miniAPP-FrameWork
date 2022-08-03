import { handlerMap } from "./logic.js";

function isTextVdom(vdom) {
  return typeof vdom == 'string' || typeof vdom == 'number';
}

function isElementVdom(vdom) {
  return typeof vdom == 'object' && typeof vdom.type == 'string';
}

export const render = (vdom, parent = null) => {
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
  if (key.startsWith('on')) {
    value = handlerMap[value];
  }

  if (isEventListenerAttr(key, value)) {
    const eventType = key.slice(2).toLowerCase();
    dom.addEventListener(eventType, value);
  } else if (isStyleAttr(key, value)) {
    Object.assign(dom.style, value);
  } else if (isPlainAttr(key, value)) {
    dom.setAttribute(key, value);
  }
};

export const createElement = (type, props, ...children) => {
  if (props === null) props = {}; // if it is function

  return {
    type,
    props,
    children
  };
};
const logicThread = new Worker('logic.js', {
  type: 'module'
});

logicThread.onmessage = e => {
  console.log(e.data);

  if (e.data.type) {
    switch (e.data.type) {
      case 'render':
        render(e.data.vdom, document.getElementById(e.data.parent_id));
        console.log(handlerMap);
        break;

      default:
        break;
    }
  }
};