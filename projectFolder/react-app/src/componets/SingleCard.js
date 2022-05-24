import React from "react"


const SingleCard=(props)=>{



    return(
        <section className="section single-main">
            <div className="container">
                <div className="row justify-content-md-between">
                    <div className="col-sm-12 col-md-6 col-lg-4 text-sm-center">
                        <img src={props.img} alt="single-product-img" className="card-img-top single-page-card-img" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-8 text-sm-center text-md-left">
                        <p className="item-name single-item-text">
                            Name: {props.name}
                        </p>
                        <p className="item-cost single-item-text">
                            Cost: $ {props.cost}
                        </p>
                        <p className="item-brand item-description single-item-text">
                            brand: {props.brand}
                        </p>
                        <p className="item-brand item-description single-item-text">
                            Board type: {props.board_type}
                        </p>
                        <p className="item-brand item-description single-item-text">
                            Year Released: {props.year_release}
                        </p>
                        <p className="item-brand item-description single-item-text">
                            Designed by: {props.designer}
                        </p>
                        <p className="item-brand item-description single-item-text">
                            Wheel Size: {props.wheel_size}
                        </p>
                        <p className="item-brand item-description single-item-text">
                            Wheel Hardness: {props.wheel_hardness}
                        </p>
                        <p className="item-brand item-description single-item-text">
                            Load Capacity: {props.load_capacity}lbs
                        </p>
                        <p className="item-description single-item-text">
                            Description: {props.description}
                        </p>
                        <p className="item-description single-item-text">
                            Items included: {props.item_included}
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