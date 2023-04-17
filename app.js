import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import main from './main.js';
import myTitulo from './componentes/myTitulo.js';
import myMenu from './componentes/myMenu.js';
import imgDerecha from './componentes/imgDerecha.js';

let app= createApp(main);

app.component(myTitulo.name, myTitulo);
app.component(myMenu.name, myMenu);
app.component(imgDerecha.name, imgDerecha);

app.mount("#app");