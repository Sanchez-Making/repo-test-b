import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

function loadComponent(Component, {
    elementToRender, props = {}, router, store, Gtm, Cookies,
}) {
    new Vue({
        render: (renderElement) => renderElement(Component, { props }),
        BootstrapVue,
        router,
        store,
        Gtm,
        Cookies,
    }).$mount(elementToRender);
}

export default loadComponent;
