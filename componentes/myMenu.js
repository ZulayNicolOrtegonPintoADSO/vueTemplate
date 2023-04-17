export default{
    name: "my-menu",
    template: /*html*/`
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">

            <a class="navbar-brand" href="#"><img  :src="config.logo" :class="one"></a>
            <a href="#" v-html="config.txt_menu[0]" class="btn"></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                
                <li class="nav-item">
                    <a href="#" v-html="config.txt_menu[1]" class="btn"></a>
                 </li>
                 <li class="nav-item">
                    <a href="#" v-html="config.txt_menu[2]" class="btn"></a>
                 </li>
                 <li class="nav-item">
                    <a href="#" v-html="config.txt_menu[3]" class="btn"></a>
                  </li>
                  <li class="nav-item">
                    <a href="#" v-html="config.txt_menu[4]" class="btn bg-info"></a>
                  </li>
               </ul>
              </div>
         </div>
         </nav>

    `,
    props:{
        config: Object
    },
}