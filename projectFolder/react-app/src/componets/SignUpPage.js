import React from "react"

const SignUp=()=>{

    return(
        <main className="main signUpMain" id="main">
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="login-div col-sm-12 col-md-7">
                        <h2 className="login-header">
                            Make a account to recieve deals, and save data.
                        </h2>
                            <form action="#link">
                                <div className="row text-left">
                                    <div className="col-12">
                                        <h3 className="loginHeader">
                                            Email
                                        </h3>
                                        <input type="text" name="email" id="emailInput"/>
        
                                    </div>
                                    <div className="col-12">
                                        <h3 className="passwordHeader">
                                            password
                                        </h3>
                                        <input type="text" name="password" id="passwordInput"/>
        
                                    </div>
                                </div>
                                <button type="submit " className="sign-button btn btn-info col-2 text-end">Save Login</button>
        
                            </form>

                    </div>
                    <div className="img-div col-sm-12 col-md-5">
                        <img src="./media/us-skateboarding.png" alt="" className=" img-fluid sign-up-img"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default SignUp