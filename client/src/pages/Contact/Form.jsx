import { Formik, Form, Field } from "formik"
import axios from "./axios"

const Contact = (props) => {
    const REGISTER_URL = "/send"

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                project: "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const res = await axios.post(
                        REGISTER_URL,
                        JSON.stringify(values),
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    // TODO: use a nice modal instead of the alert
                    alert("Thanks, we'll get back to you soon!")
                    setSubmitting(false)
                } catch (err) {
                    console.log("What is happening...", err)
                }
            }}
        >
            {(props) => (
                <Form className="card-body">
                    <h2 className="card-title mx-auto">By appointment only</h2>

                    <div className="max-lg:space-y-6 lg:flex lg:gap-3">
                        <p className="form-control w-full">
                            <label className="input-group input-group-vertical label">
                                <span>first name</span>
                                <Field
                                    name="firstName"
                                    type="text"
                                    placeholder="Bike"
                                    className="input input-bordered w-full bg-base-200"
                                />
                            </label>
                        </p>

                        <p className="form-control w-full">
                            <label className="input-group input-group-vertical label">
                                <span>last name</span>
                                <Field
                                    name="lastName"
                                    type="text"
                                    placeholder="Rider"
                                    className="input input-bordered w-full bg-base-200"
                                />
                            </label>
                        </p>
                    </div>

                    <div className="max-lg:space-y-6 lg:flex lg:gap-3">
                        <p className="form-control w-full">
                            <label className="input-group input-group-vertical label">
                                <span>email address</span>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="someone@awesomemail.com"
                                    className="input input-bordered w-full bg-base-200"
                                />
                            </label>
                        </p>

                        <p className="form-control w-full">
                            <label className="input-group input-group-vertical label">
                                <span>phone number</span>
                                <Field
                                    name="phone"
                                    type="tel"
                                    placeholder="5551234567"
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                    className="input input-bordered w-full bg-base-200"
                                />
                            </label>
                        </p>
                    </div>

                    <div className="lg:flex lg:gap-3">
                        <p className="form-control">
                            <label className="input-group input-group-vertical label">
                                <span className="label-text">
                                    project description - year / make / model
                                </span>
                                <textarea
                                    name="project"
                                    className="textarea textarea-bordered h-24 bg-base-200"
                                    placeholder="year / make / model"
                                    onChange={props.handleChange("project")}
                                ></textarea>
                            </label>
                        </p>

                        <div className="label flex lg:flex-col gap-6 lg:gap-4 max-lg:mt-6">
                            <button
                                type="reset"
                                className="btn btn-outline btn-primary grow lg:w-full"
                                onClick={props.handleReset}
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary grow lg:w-full"
                                disabled={props.isSubmitting}
                                onClick={props.handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Contact
