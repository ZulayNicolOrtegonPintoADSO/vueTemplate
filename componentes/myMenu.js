export default{
    name: "my-menu",
    template: /*html*/`
            <div class="container-fluid bg-light">
                <div class="row p-5">
                    <div class="col-4">
                        <img  :src="config.logo" :class="one" style=" width: 50px; height: 50px;"> 
                        <a href="#" class="btn" style="font-size: 1cm;"><b>DANVO</b></a>
                    </div>
           
                    <div class="col-8 d-flex justify-content-evenly">
                        <a href="#" v-html="config.txt_menu[1]" class="btn px-5" style="font-size: 1cm;"></a>
                        <a href="#" v-html="config.txt_menu[2]" class="btn px-5" style="font-size: 1cm;"></a>
                        <a href="#" v-html="config.txt_menu[3]" class="btn px-5" style="font-size: 1cm;"></a>
                        <a href="#" v-html="config.txt_menu[4]" class="btn px-5 text-light bg-primary" style="font-size: 1cm;"></a>
                    </div>
                 </div>
            </div>      
    `,
    props:{
        config: Object
    },
}