import React from "react"
import { Link, Outlet } from "react-router-dom"


const SingleCard=(props)=>{



    return(
        <section className="section single-main">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-10 col-md-4 text-center">
                        <img src={props.img} alt="single-product-img" className="card-img-top img-fluid allItemsImg" />
                    </div>
                    <div className="col-sm-12 col-md-8 text-sm-center text-md-left">
                        <p className="item-name">
                            Name: {props.name}
                        </p>
                        <p className="item-cost">
                            Cost: {props.cost}
                        </p>
                        <p className="item-brand item-description">
                            brand: {props.brand}
                        </p>
                        <p className="item-brand item-description">
                            Board type: {props.board_type}
                        </p>
                        <p className="item-brand item-description">
                            Year Released: {props.year_release}
                        </p>
                        <p className="item-brand item-description">
                            Made by: {props.designer}
                        </p>
                        <p className="item-brand item-description">
                            Wheel Size: {props.wheel_size}
                        </p>
                        <p className="item-brand item-description">
                            Wheel Hardness: {props.wheel_hardness}
                        </p>
                        <p className="item-brand item-description">
                            Load Capacity: {props.load_capacity}
                        </p>
                        <p className="item-description">
                            Description: {props.description}
                        </p>
                        <button className="btn btn-info add-button">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleCard