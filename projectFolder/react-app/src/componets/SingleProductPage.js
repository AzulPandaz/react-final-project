import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const SingleProduct=()=>{

    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const url = `http://localhost:3001/api/items/${id}`;
        fetch(url).then(res => res.json()).then(item=> setData(item))
    }, [])
    console.log(data)

    return(
        <section className="section single-main">
            <div className="container">
                <div className="row justify-content-sm-center">
                                <div className="col-sm-12 col-md-5 text-sm-center text-md-left">
                                    <SingleCard  key={data.id} name={data.item_name} cost={data.item_cost} brand={data.brand} board_type={data.board_type} year_release={data.year_release} designer={data.designer} wheel_size={data.wheel_size} wheel_hardness={data.wheel_hardness} load_capacity={data.load_capacity} description={data.description} img={data.item_image}/>
                                </div>
                    </div>
                </div>
        </section>
    )
}

export default SingleProduct

