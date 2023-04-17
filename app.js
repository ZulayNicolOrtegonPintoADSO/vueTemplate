import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';

import main from './main.js';

import myBody from './componentes/myBody.js';
import myMenu from './componentes/myMenu.js';


let app= createApp(main);

app.component(myBody.name, myBody);
app.component(myMenu.name, myMenu);

app.mount("#app");