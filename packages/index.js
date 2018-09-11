import Ueditor from './ueditor/index.js';
const components = [
    Ueditor
];

function install(Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    });
}

if (window.Vue) {
    install(window.Vue);
}

export default install;