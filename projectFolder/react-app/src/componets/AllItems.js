import React, { useState, useEffect } from "react"
import Card from "./Card"

const AllItems = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3001/api/items`;
        fetch(url).then(res => res.json()).then(item => setData(item));
    }, [])
    console.log(data)

    return (
        <main className="main" id="main">
            <section className="section skateBoard-section">
                <div className="container">
                    <h3 className="skateboard-header all-item-header">
                        All Skateboards
                    </h3>
                    <div className="board-list row  justify-content-md-between ">
                        {data.map(item => {
                            return (
                                <div className="card-div col-sm-12 col-md-4 d-flex justify-content-center justify-content-md-between">
                                    <Card key={item.id} name={item.item_name} brand={item.brand} boardType={item.board_type} id={item.id} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AllItems
