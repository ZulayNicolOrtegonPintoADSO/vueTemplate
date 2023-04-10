import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import myTitulo from './componentes/myTitulo.js';

let app= createApp();
app.component(myTitulo.name, myTitulo);

app.mount("#app");