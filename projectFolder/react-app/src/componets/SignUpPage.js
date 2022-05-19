import React, { useState } from "react"


const SignUp = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        console.log(event)
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const SubmitForm = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/api/items/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((response) => {
            return response.json()
        }).then((body) => {
            console.log(body);
        });
    }
    console.log(formData)

    return (
        <main className="main signUpMain" id="main">
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="login-div col-sm-12 col-md-7">
                            <h2 className="login-header">
                                Make a account to recieve deals, and save data.
                            </h2>
                            <form onSubmit={SubmitForm}>
                                <div className="row text-left">
                                    <div className="col-12">
                                        <h3 className="loginHeader">
                                            Email
                                        </h3>
                                        <input type="text" name="username" onChange={handleChange} value={formData.username} />

                                    </div>
                                    <div className="col-12">
                                        <h3 className="passwordHeader">
                                            password
                                        </h3>
                                        <input type="text" name="password" onChange={handleChange} value={formData.password} />
                                    </div>
                                </div>
                                <button className="sign-button btn btn-info col-2 text-end">Save Login</button>

                            </form>

                        </div>
                        <div className="img-div col-sm-12 col-md-5">
                            <img src="./media/us-skateboarding.png" alt="" className=" img-fluid sign-up-img" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignUp