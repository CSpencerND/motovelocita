import { useRef, useEffect } from "react"

const SubmissionModal = ({ isSubmitSuccessful, fetchSuccess, reset }) => {
    const successRef = useRef(null)
    const failureRef = useRef(null)

    useEffect(() => {
        if (isSubmitSuccessful) {
            if (fetchSuccess) {
                successRef.current.click()
                reset()
            } else {
                failureRef.current.click()
            }
        }
    }, [isSubmitSuccessful, fetchSuccess, reset])

    return (
        <>
            <label
                htmlFor="successModal"
                className="hidden"
                aria-hidden
                ref={successRef}
            >
                open modal
            </label>
            <label
                htmlFor="failureModal"
                className="hidden"
                aria-hidden
                ref={failureRef}
            >
                open modal
            </label>
            <SuccessModal />
            <FailureModal />
        </>
    )
}

const SuccessModal = () => {
    return (
        <>
            <input type="checkbox" id="successModal" className="modal-toggle" />
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
}

const FailureModal = () => {
    return (
        <>
            <input type="checkbox" id="failureModal" className="modal-toggle" />
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
}

export default SubmissionModal
