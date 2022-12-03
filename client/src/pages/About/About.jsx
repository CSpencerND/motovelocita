import mountains from "./Himalayan-Mountains.jpg"
import kerry from "./RHandt-Kerry-Sano_Velocita.jpg"
import { motion } from "framer-motion"

const About = (props) => {
    props.useTitle("About")

    return (
        <motion.div key="about" {...props.motions}>
            <div
                className={`bg-base-100 h-16 md:h-20 shadow-box lg:mb-12`}
            ></div>

            <main className="container mx-auto m-6 max-w-screen-lg min-h-screen">
                <section className="card lg:card-side bg-base-100 shadow-box m-6">
                    <div className="card image-full">
                        <figure className="p-6">
                            <img
                                src={mountains}
                                alt="Riding across the Himalayan Mountains"
                                className="rounded-box opacity-80"
                            />
                        </figure>
                        <div className="card-body">
                            <figcaption className="text-base-200">
                                Riding across the Himalayan Mountains <br />
                                Photo by Noah Conopask
                            </figcaption>
                        </div>
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

                <section className="card lg:card-side bg-base-100 shadow-box m-6">
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
                                For more about me, click
                                <span className="ml-2 link link-primary">
                                    <a
                                        href="https://uniongaragenyc.com/blogs/journal/moto-velocita-new-yorks-newest-service-shop"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        here
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="card image-full">
                        <figure className="p-6">
                            <img
                                src={kerry}
                                alt="RHandt - Kerry Sano - Velocita"
                                className="rounded-box"
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
