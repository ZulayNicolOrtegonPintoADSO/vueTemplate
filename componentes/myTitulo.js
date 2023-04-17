export default{
    name: "my-titulo",
    template: /*html*/`
        <div> 
            <h1 v-html="config.titulo"></h1>
            <h5 v-html="config.texto"></h5>
            <a href="#" v-html="config.txt_boton" class="btn bg-info"></a>
        </div>
    `,
    props:{
        config: Object
    },
}