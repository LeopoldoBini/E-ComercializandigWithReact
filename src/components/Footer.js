const Footer = () => {
    return <>
        <footer class="page-footer" style={{position: "absolute",bottom:0, width:"100vw"}}>
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text" style={{padding: 0 }}>Ya se, somos los mejores..</h5>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <p class="grey-text text-lighten-4 " style={{padding: 0 }}>Vuelve pronto a Comprar!!.</p>
                        

                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2094 Copyright Always
                    <a class="grey-text text-lighten-4 right" href="#!">Visit another place to spend</a>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;