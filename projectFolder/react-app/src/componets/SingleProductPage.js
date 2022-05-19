import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const SingleProduct = () => {

    const [data, setData] = useState([]);
    const [itemincluded, setitemincluded] = useState([])
    const { id } = useParams();


    useEffect(() => {
        const url = `http://localhost:3001/api/items/${id}`;
        fetch(url).then(res => res.json()).then(item => setData(item))
    }, [])
    useEffect( () => {
        
            data.map(item => {
                setitemincluded(prev => [...prev, `${item.item_included}, `])
            })
        }, [data])
        console.log(itemincluded)

        return (
            <section className="section single-main">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-sm-12 col-md-5 text-sm-center text-md-left">
                            {data.map(item => {
                                if (item.item_included.includes(data[0].item_included)) {
                                    return (
                                        <div>
                                            <SingleCard key={item.id} name={item.item_name} cost={item.item_cost} brand={item.brand} board_type={item.board_type} year_release={item.year_release} designer={item.designer} wheel_size={item.wheel_size} wheel_hardness={item.wheel_hardness} load_capacity={item.load_capacity} description={item.description} img={item.item_image} item_included={itemincluded } />
                                            
                                        </div>
                                    )
                                }
                            })}


                        </div>
                    </div>
                </div>
            </section>
        )

    }

export default SingleProduct


    {/* <SingleCard  key={data.id} name={data.item_name} cost={data.item_cost} brand={data.brand} board_type={data.board_type} year_release={data.year_release} designer={data.designer} wheel_size={data.wheel_size} wheel_hardness={data.wheel_hardness} load_capacity={data.load_capacity} description={data.description} img={data.item_image}/> */ }