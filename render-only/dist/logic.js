const render = (vdom, parent_id) => {
  self.postMessage({
    type: 'render',
    vdom: vdom,
    parent_id: parent_id
  });
};

export const handlerMap = [];

const createElement = (type, props, ...children) => {
  if (props === null) props = {}; // if it is function

  for (const k in props) {
    if (k[0] === 'o' && k[1] === 'n') {
      let e = props[k];
      handlerMap.push(e);
      props[k] = handlerMap.length;
    }
  }

  return {
    type,
    props,
    children
  };
};

const list = ['你好', '123', '456'];
const show = true;

const handleClick = () => {
  alert("CLICK EVENT!");
};

const jsx = show ? createElement("div", null, createElement("button", {
  onClick: handleClick
}, "\u8B66\u544Abutton"), createElement("ul", null, list.map((value, index) => {
  return createElement("li", {
    key: index,
    onClick: handleClick
  }, " ", value, " ");
}))) : createElement("h1", null, "None");
render(jsx, 'app');