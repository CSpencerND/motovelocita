import { useRef, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import Form from "./Form"

const Contact = (props) => {
    props.useTitle("Contact")

    const formRef = useRef(null)
    const modalRef = useRef(null)
    const [successful, setSuccessful] = useState(null)

    const submitForm = async (formData) => {
        try {
            await axios.post(
                "https://api.motovelocita.com/send",
                JSON.stringify(formData),
                { headers: { "Content-Type": "application/json" } }
            )
            setSuccessful(true)
            formRef.current && formRef.current.reset()
        } catch (err) {
            console.log(err.message)
            setSuccessful(false)
        } finally {
            modalRef.current && modalRef.current.click()
        }
    }

    const successModal = (
        <>
            <input
                ref={modalRef}
                type="checkbox"
                id="successModal"
                className="modal-toggle"
            />
            <div
                role="dialog"
                className="modal modal-bottom sm:modal-middle bg-black/50 backdrop-blur-sm"
            >
                <div className="modal-box bg-base-100 !rounded-lg space-y-4">
                    <h3 className="font-bold text-lg">
                        Thank you for your inquiry!
                    </h3>
                    <p>
                        A copy of the form has been sent to your email for your
                        records.
                    </p>
                    <p>We'll get back to you soon!</p>
                    <div className="modal-action">
                        <label
                            htmlFor="successModal"
                            className="btn btn-primary shadow-box"
                        >
                            OK
                        </label>
                    </div>
                </div>
            </div>
        </>
    )

    const failureModal = (
        <>
            <input
                ref={modalRef}
                type="checkbox"
                id="failureModal"
                className="modal-toggle"
            />
            <div
                role="dialog"
                className="modal modal-bottom sm:modal-middle bg-black/50 backdrop-blur-sm"
            >
                <div
                    role="dialog"
                    className="modal-box bg-base-100 !rounded-lg space-y-4"
                >
                    <h3 className="font-bold text-lg">Oh no!</h3>
                    <p>Something went wrong 😫</p>
                    <p>Please try again</p>
                    <div className="modal-action">
                        <label
                            htmlFor="failureModal"
                            className="btn btn-primary shadow-box"
                        >
                            OK
                        </label>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <motion.div key="contact" {...props.motions}>
            <div className={`bg-base-100 h-16 md:h-20 shadow-box`}></div>
            {successful ? successModal : failureModal}
            <main className="container mx-auto">
                <section className="mx-6">
                    <Form submitForm={submitForm} ref={formRef} />
                </section>
            </main>
        </motion.div>
    )
}

export default Contact
