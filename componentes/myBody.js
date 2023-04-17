export default{
    name: "my-body",
    template: /*html*/`
        
    <div class="container-fluid bg-light">
        <div class="row">
             <div class="col-6">
                <h1 v-html="config.titulo"></h1>
                <h5 v-html="config.texto"></h5>
                
                <a href="#" v-html="config.txt_boton" class="btn"></a>
            </div>

            <div class="col-6  text-center">
                <img src="img/person.png" alt="img" class="img-fluid">
             </div>
        </div>
    </div>
    `,
    props:{
        config: Object
    },
}