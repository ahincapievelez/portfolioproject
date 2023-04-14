function Footer() {
    return (
        <div className="container-fluid footer-box">

            <div className="row">
                <div className="col social-icons">
                    <a href="https://github.com/ahincapievelez/ahincapievelez"><img className="footer-icon" src="linkedin1.png" alt=""/></a>
                    <a href="https://www.linkedin.com/in/andres-hincapie/"><img className="footer-icon" src="github1.png" alt=""/></a>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col">
                    <img className="logo-footer" src="logoah.png" alt=""/>
                    <footer className="footer">
                        <span>©2023</span>
                    </footer>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;