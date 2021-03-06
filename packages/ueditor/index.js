import Ueditor from './src/main.vue';
HTMLElement.prototype.appendHTML = function (html) {
  var divTemp = document.createElement("div"), nodes = null
    // 文档片段，一次性append，提高性能
    , fragment = document.createDocumentFragment();
  divTemp.innerHTML = html;
  nodes = divTemp.childNodes;
  for (var i = 0, length = nodes.length; i < length; i += 1) {
    fragment.appendChild(nodes[i].cloneNode(true));
  }
  this.appendChild(fragment);
  // 据说下面这样子世界会更清净
  nodes = null;
  fragment = null;
};
function hasClass (obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass (obj, cls) {
  if (!hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass (obj, cls) {
  if (hasClass(obj, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    obj.className = obj.className.replace(reg, ' ');
  }
}

HTMLElement.prototype.toggleClass = function (cls) {
  if (hasClass(this, cls)) {
    removeClass(this, cls);
  } else {
    addClass(this, cls);
  }
}
Ueditor.install = function (Vue) {
  Vue.component(Ueditor.name, Ueditor);
};

export default Ueditor;