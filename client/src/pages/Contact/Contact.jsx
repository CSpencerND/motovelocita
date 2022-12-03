import { motion } from "framer-motion"
import Form from "./Form"

const Contact = (props) => {
    props.useTitle("Contact")

    return (
        <motion.div key="contact" {...props.motions}>
            <div className={`bg-base-100 h-16 md:h-20 shadow-box`}></div>

            <main className="container mx-auto max-w-screen-lg min-h-screen">
                <div className="m-6 lg:flex gap-6 lg:mb-0">
                    <section className="my-6 mx-auto max-w-md lg:max-w-none lg:w-full">
                        <div className="card mx-auto shadow-box">
                            <Form />
                        </div>
                    </section>

                    {/*
                    <section className="my-6 mx-auto max-w-md flex flex-col md:flex-row lg:flex-col gap-6 lg:max-w-fit">
                        <div className="card mx-auto shadow-box w-full lg:h-full">
                            <div className="card-body">
                                <h2 className="card-title">Velocita</h2>
                                <p>
                                    93 Forrest St Brooklyn, NY <br />
                                    <span>718-710-0545</span>
                                </p>
                            </div>
                        </div>
                        <div className="card mx-auto shadow-box w-full lg:h-full">
                            <div className="card-body">
                                <h2 className="card-title">Shop Hours</h2>
                                <div>
                                    <p className="whitespace-nowrap">
                                        <time dateTime="10">
                                            Mon - Fri: 10am
                                        </time>
                                        -<time dateTime="18">6pm</time>
                                    </p>
                                    <p> Sat & Sun: Closed </p>
                                </div>
                            </div>
                        </div>
                    </section>
                */}
                </div>
            </main>
        </motion.div>
    )
}

export default Contact
