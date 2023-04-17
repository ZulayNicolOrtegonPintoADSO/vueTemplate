export default{
    name: "img-derecha",
    template: /*html*/`
        <img  :src="config.img" :class="one" >
    `,
    props:{
        config: Object
    },
}