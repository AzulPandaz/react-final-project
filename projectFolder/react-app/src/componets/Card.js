import React from "react"
import { Link, Outlet } from "react-router-dom"

const Card = (props) => {

    return (
        <div className="card card-width">
            <div className="d-flex justify-content-center">
            <img src={props.img} className="card-img-top img-fluid allItemsImg text-center" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title item-header">{props.name}</h5>
                <p className="card-text item-text">Made by: {props.brand}</p>
                <p className="card-text item-text">Board Type: {props.boardType}</p>
                <div className="btn-div text-center">
                <Link to={`/items/${props.id}`} className="btn item-btn">Learn More</Link>
                </div>
            </div>
        </div>
    )
}
export default Card