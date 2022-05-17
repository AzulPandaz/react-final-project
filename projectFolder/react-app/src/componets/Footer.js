import React from "react"

const Footer=()=>{

    return(
        <footer className="footer" id="footer">
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-9 contact-info">
                        <p className="colophon"> AzulPandaz</p>
                        <p className="phone">601-123-1234</p>
                        <p className="email">Fake@gmail.com</p>
                    </div>
                    <div className="socials col">
                        <div className="row justify-content-between">
                            <div className="icon-div col-3">
                                <svg className="icon icon-facebook">
                                    <use xlinkHref="#icon-facebook"></use>
                                </svg>
                            </div>
                            <div class="icon-div">
                                <svg className="icon icon-twitter">
                                    <use xlinkHref="#icon-twitter"></use>
                                </svg>
                            </div>
                            <div className="icon-div">
                                <svg className="icon icon-youtube">
                                    <use xlinkHref="#icon-youtube"></use>
                                </svg>
                            </div>
                            <div className="icon-div">
                                <svg className="icon icon-github">
                                    <use xlinkHref="#icon-github"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer