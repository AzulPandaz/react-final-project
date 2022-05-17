import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const SingleProduct=()=>{

    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const url = `http://localhost:3001/api/items/${id}`;
        fetch(url).then(res => res.json()).then(item => setData(item));
    }, [])
    console.log(data)

    return(
        <section className="section single-main">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-10 col-md-7 text-center">
                        <img src="./media/knightHoodie.jpg" alt="single-product-img" />
                    </div>
                    {data.map(item => {
                        return (
                                <div className="col-sm-12 col-md-5 text-sm-center text-md-left">
                                    <SingleCard key={item.id} name={item.item_name} brand={item.brand} board_type={item.board_type} year_release={item.year_release} desinger={item.designer} wheel_size={item.wheel_size} wheel_hardness={item.wheel_hardness} load_capacity={item.load_capacity} description={item.description} />
                                </div>
                            )
                        })}
                       <SingleCard key={item.id} name={item.item_name} brand={item.brand} />
                        <button className="btn btn-info add-button">
                            Add to Cart
                        </button>
                    </div>
                </div>
        </section>
    )
}

export default SingleProduct