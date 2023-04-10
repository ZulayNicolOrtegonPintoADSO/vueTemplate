import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import myTitulo from './componentes/myTitulo.js';
import myMenu from './componentes/myMenu.js';

let app= createApp();

app.component(myTitulo.name, myTitulo);
app.component(myMenu.name, myMenu);

app.mount("#app");