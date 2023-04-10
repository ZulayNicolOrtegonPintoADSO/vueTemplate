export default{
    name: "my-titulo",
    template: /*html*/`
        <h1 v-text="txt"> </h1>
    `,

    data(){
        return{
            txt: "El trabajo se llama: vueTemplate"
        }
    }
}