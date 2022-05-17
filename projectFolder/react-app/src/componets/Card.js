import React from "react"
import { Link, Outlet } from "react-router-dom"

const Card = (props) => {

    return (
        <div className="card card-width text-center">
            <img src="./media/knightHoodie.jpg" className="card-img-top img-fluid allItemsImg" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.brand}</p>
                <p className="card-text">{props.boardType}</p>
                <Link to={`/items/${props.id}`} className="btn btn-primary">Learn More</Link>
            </div>
        </div>
    )
}
export default Card