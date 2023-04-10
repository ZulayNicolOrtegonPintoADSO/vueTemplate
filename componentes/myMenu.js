export default{
    name: "my-menu",
    template: /*html*/`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
              
            <a class="navbar-brand" href="#"><img src="img/logo.png" alt="Logo">DANVO</a>
              
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" text-secondary href="#">Features</a>
                  <a class="nav-link text-secondary" href="#">Pricing</a>
                  <a class="nav-link disabled text-secondary" href="#">Testimonials</a>
                  <a class="nav-link disabled bg-info rounded text-light" href="#">Sing Up</a>
                </div>
            </div>
    </div>
</nav>

    `,

    data(){
        return{
            
        }
    }
}