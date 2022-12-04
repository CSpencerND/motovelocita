import { useForm } from "react-hook-form"
import axios from "./axios"

const Contact = (props) => {
    const REGISTER_URL = "/send"

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="card mx-auto my-6 shadow-box w-full max-w-sm">
            <form className="card-body">
                <h2 className="card-title mx-auto">By appointment only</h2>
                <p className="form-control">
                    <label htmlFor="name" className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Bike Rider"
                        className="input"
                    />
                </p>
                <p className="form-control">
                    <label htmlFor="email" className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="someone@example.com"
                        className="input"
                    />
                </p>
                <p className="form-control">
                    <label htmlFor="phone" className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="input"
                    />
                </p>
                <p className="form-control">
                    <label htmlFor="description" className="label">
                        <span className="label-text">
                            project description - year / make / model
                        </span>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="textarea textarea-bordered h-24"
                        placeholder="What can I do for you?"
                    ></textarea>
                </p>
                <p className="flex gap-6 pt-3">
                    <input
                        type="reset"
                        value="reset"
                        className="btn btn-outline btn-primary grow"
                    />
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary grow"
                    />
                </p>
            </form>
        </div>
    )
}

// <div className="label flex lg:flex-col gap-6 lg:gap-4 max-lg:mt-6">
//     <button
//         type="reset"
//         className="btn btn-outline btn-primary grow lg:w-full"
//         onClick={props.handleReset}
//     >
//         Reset
//     </button>
//     <button
//         type="submit"
//         className="btn btn-primary grow lg:w-full"
//         disabled={props.isSubmitting}
//         onClick={props.handleSubmit}
//     >
//         Submit
//     </button>
// </div>

export default Contact
