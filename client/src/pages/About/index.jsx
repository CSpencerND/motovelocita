import mountains from "./Himalayan-Mountains.webp"
import kerry from "./RHandt-Kerry-Sano_Velocita.webp"
import { motion } from "framer-motion"

const About = (props) => {
    props.useTitle("About")

    return (
        <motion.div key="about" {...props.motions}>
            <div
                className={`bg-base-100 h-16 md:h-20 shadow-box lg:mb-12`}
            ></div>

            <main className="container mx-auto m-6 max-w-screen-lg min-h-screen">
                <section className="card md:card-side md:space-x-6 md:p-6 bg-base-100 shadow-box m-6">
                    <div>
                        <a href="https://advontherocks.com"
                            target="_blank"
                            rel="noreferrer"
                            className="card image-full h-full"
                        >
                            <figure className="max-md:p-6">
                                <img
                                    src={mountains}
                                    alt="Riding across the Himalayan Mountains"
                                    height={500}
                                    width={1000}
                                    className="rounded-lg opacity-80"
                                />
                            </figure>
                            <div className="card-body justify-between ">
                                <figcaption className="text-base-200">
                                    Riding across the Himalayan Mountains <br />
                                    Photo by Noah Conopask
                                </figcaption>
                                <span className="link link-primary backdrop-blur -m-2 px-2 py-1 rounded-b-lg sm:-m-8 sm:px-4 sm:py-2 bg-black/30">
                                    @advontherocks
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="card">
                        <div className="card-body p-6 max-lg:pt-0 max-md:pt-0 lg:pl-0">
                            <h2 className="card-title">MY PROMISE</h2>
                            <p>
                                I will work on your bike as if it were my own by
                                choosing the best parts for your desired outcome
                                - often using manufacturer spec parts.
                            </p>
                            <p>
                                Your business is important to me and I want you
                                to trust me with your bike, so I promise to be
                                honest and straightforward. I’m happy to answer
                                any questions you may have.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="card md:card-side md:space-x-6 md:p-6 bg-base-100 shadow-box m-6">
                    <div className="card">
                        <div className="card-body p-6 max-lg:pb-0 max-md:pb-0 lg:pr-0">
                            <h2 className="card-title">ABOUT ME</h2>
                            <p>
                                I am the owner, operator, and face behind
                                Velocita. I began my mechanical career working
                                on cars: the first car I owned was hit and
                                "totaled," so I learned to fix it myself and was
                                hooked on wrenching.
                            </p>
                            <p>
                                Later, I went to school to work on race cars and
                                then fell in love with motorcycles. Since then,
                                I have worked on street bikes and race bikes at
                                both independent performance shops and
                                dealerships.
                            </p>
                            <p>
                                I have experience in all aspects of the
                                industry: service, parts, sales, technician, and
                                management.
                            </p>
                            <p>
                                Find out more about me at
                                <span className="link link-primary ml-2">
                                    <a
                                        href="https://uniongaragenyc.com/blogs/journal/moto-velocita-new-yorks-newest-service-shop"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Union Garage NYC
                                    </a>
                                </span>
                                .
                            </p>
                            <p>
                                Want to vacation with your bike?
                                <br />
                                Check out
                                <span>
                                    <a href="https://advontherocks.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link link-primary ml-2"
                                    >
                                        Adventure On The Rocks!
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="card image-full">
                        <figure className="max-md:p-6">
                            <img
                                src={kerry}
                                alt="RHandt - Kerry Sano - Velocita"
                                height={500}
                                width={750}
                                className="rounded-lg"
                            />
                        </figure>
                        <div className="card-body self-end">
                            <figcaption>Photo by Ryan Handt</figcaption>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    )
}

export default About
