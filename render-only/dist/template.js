import { render, createElement } from "./logic.js";
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