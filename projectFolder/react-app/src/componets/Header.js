import React from "react"
import { Link, Outlet } from "react-router-dom"

const Header=()=>{
    
    return(
    <header className="header" id="header">
        <div className="container">
            <div className="row">
                <div className="logo-div col-9">
                   <Link to="/"><h1 className="header-logo ">Panda's Skateshop</h1></Link > 
                </div>
                <div className="logo-div col-3 row justify-content-end">
                    <Link to="/SignUpPage" className="col-md-8 text-center signUp">Sign Up</Link >
                </div>
            </div>
            <div className="dropdown col-10-sm text-center dropDown d-sm-block d-md-none">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-expanded="false">
                    Content
                </button>
                <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="./AllItemsPage">All products</Link>
                    <Link className="dropdown-item" to="./StreetBoard">Street Board</Link >
                    <Link className="dropdown-item" to="./PennyBoard">Penny Board</Link >
                    <Link className="dropdown-item" to="./LongBoard">Long Board</Link >
                    <Link className="dropdown-item" to="./CruiserBoard">Cruiser Board</Link >
                    <Link className="dropdown-item" to="./AboutPage">About</Link >
                </div>
            </div>
            <div className="div d-none d-md-block col-12">
                <nav className="nav header-nav justify-content-between">
                    <Link to="./AllItemsPage" className="nav-link header-link btn">All products</Link >
                    <Link to="./StreetBoard" className="nav-link header-link btn">Street Board</Link >
                    <Link to="./PennyBoard" className="nav-link header-link btn">Penny Board</Link >
                    <Link to="./LongBoard" className="nav-link header-link btn">Long Board</Link >
                    <Link to="./CruiserBoard" className="nav-link header-link btn">Cruiser Board</Link >
                    <Link to="./AboutPage" className="nav-link header-link btn">About Us</Link >
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header