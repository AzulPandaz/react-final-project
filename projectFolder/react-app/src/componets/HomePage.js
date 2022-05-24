import React from "react"

const HomePage = () => {

    return (
        <main className="main" id="main">
            <section className="first-main">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./media/us-skateboarding.png" className="d-block height-img w-100 img-fluid" alt="skateboardingLanding" />
                        </div>
                        <div className="carousel-item">
                            <img src="./media/skateboarding-guy.jpeg" className="d-block height-img w-100 img-fluid" alt="skateboardingLanding" />
                        </div>
                        <div className="carousel-item">
                            <img src="./media/us-skateboarding.png" className="d-block height-img w-100 img-fluid" alt="skateboardingLanding" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="last-main">
                <div className="container">
                        <div className="row justify-content-center">
                            <div className="location-div col-sm-12 col-md-8">
                                <h3 className="details-text">
                                    Information:
                                </h3>
                                <p className="location-text info-text">
                                    Located at: 1234 state street
                                </p>
                                <p className="info-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus autem maiores quidem itaque libero id vitae alias? Rerum, veniam eos quas consequuntur recusandae tempora dolorem ratione repellat tenetur excepturi totam laborum tempore corporis mollitia ab, asperiores doloremque laudantium nisi dolore soluta quos at corrupti necessitatibus. Ut minus totam dolores cumque doloribus illum beatae, magnam voluptatibus. Est, quaerat eius? Sapiente saepe nam, esse quasi odit adipisci amet commodi tenetur laboriosam reiciendis error perspiciatis odio cupiditate. Nobis quidem aut tenetur reiciendis voluptatem voluptatum nisi velit. Natus, sint quae repellendus dolore iure molestiae rerum ipsam explicabo impedit vero deleniti nihil quibusdam mollitia sit.
                                </p>
                            </div>
                            <div className="img-div col-sm-12 col-md-4">
                            <img src="./media/us-skateboarding.png" className="img-fluid" alt="..." />
                            </div>
                        </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage