import React, { useState, useEffect } from "react"
import Card from "./Card"

const LongBoard=()=>{
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3001/api/items/longboard`;
        fetch(url).then(res => res.json()).then(item => setData(item));
    }, [])
    console.log(data)


    return(
        <div>
            <section className='longboard-section section'>
                <div className='container'>
                    <div className='row'>
                    <h3 className="skateboard-header all-item-header">
                        LongBoards
                    </h3>
                    <div className="board-list row  justify-content-md-between ">
                        {data.map(item => {
                            return (
                                <div className="card-div col-sm-12 col-md-4 d-flex justify-content-center justify-content-md-between">
                                    <Card key={item.id} name={item.item_name} brand={item.brand} boardType={item.board_type} />
                                </div>
                            )
                        })}
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default LongBoard