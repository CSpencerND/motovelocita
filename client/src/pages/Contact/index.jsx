import { motion } from "framer-motion"
import Form from "./Form"

const Contact = (props) => {
    props.useTitle("Contact")

    return (
        <motion.div key="contact" {...props.motions}>
            <div className={`bg-base-100 h-16 md:h-20 shadow-box`}></div>

            <main className="container mx-auto">
                <section className="mx-6">
                    <Form />
                </section>
            </main>
        </motion.div>
    )
}

export default Contact
