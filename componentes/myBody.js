export default{
    name: "my-body",
    template: /*html*/`
        
    <div class="container-fluid bg-light">
        <div class="row">
            <div class="col-6 px-5 d-flex" style="font-size: 2cm; flex-direction: column; justify-content: center;">
                <b v-html="config.titulo"></b>
                <h5 v-html="config.texto" class="py-5" style="font-size: 1cm;"></h5>

                <div class="container-fluid bg-light">           
                        <a href="#" v-html="config.txt_boton" class="btn btn-primary border-0 text-light" style="font-size: 1cm;"></a>
                </div>     
            </div>
            
            <div class="col-6  text-center">
                <img src="img/person.png" alt="img" class="img-fluid ">
             </div>
        </div>
    </div>
    `,
    props:{
        config: Object
    },
}