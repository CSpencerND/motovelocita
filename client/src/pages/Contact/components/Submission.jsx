import { useRef, forwardRef, useImperativeHandle, useState } from "react"
import axios from "axios"

const Submission = forwardRef(({ reset }, ref) => {
    const modalRef = useRef(null)
    const [successful, setSuccessful] = useState(null)

    useImperativeHandle(ref, () => ({
        async submitForm(formData) {
            try {
                await axios.post(
                    "http://localhost:3001/send",
                    JSON.stringify(formData),
                    { headers: { "Content-Type": "application/json" } }
                )
                setSuccessful(true)
                reset()
            } catch (err) {
                console.log(err.message)
                setSuccessful(false)
            }
            console.log(modalRef.current)
            modalRef.current.click()
        },
    }))

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

    return successful ? successModal : failureModal
})

export default Submission
