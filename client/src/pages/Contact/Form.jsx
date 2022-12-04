import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "./axios"

const Form = () => {
    const REGISTER_URL = "/send"

    const [submitState, setSubmitState] = useState("cursor-not-allowed")

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const Error = ({ err }) => {
        return (
            <div className="alert alert-error shadow-box p-2">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{`${err} is a required field.`}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="card mx-auto my-6 shadow-box w-full max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h2 className="card-title mx-auto">By appointment only</h2>
                <p className="form-control">
                    <label htmlFor="name" className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        {...register("name", { required: true })}
                        id="name"
                        type="text"
                        placeholder="Bike Rider"
                        className="input"
                    />
                </p>
                {errors.name && <Error err="Name" />}

                <p className="form-control">
                    <label htmlFor="email" className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", { required: true })}
                        id="email"
                        type="email"
                        placeholder="someone@example.com"
                        className="input"
                    />
                </p>
                {errors.email && <Error err="Email" />}

                <p className="form-control">
                    <label htmlFor="phone" className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        {...register("phone", {
                            required: true,
                            minLength: 10,
                        })}
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="input"
                    />
                </p>
                {errors.phone && <Error err="Phone" />}

                <p className="form-control">
                    <label htmlFor="description" className="label">
                        <span className="label-text">
                            project description - year / make / model
                        </span>
                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        id="description"
                        className="textarea textarea-bordered h-24"
                        placeholder="What can I do for you?"
                    ></textarea>
                </p>
                {errors.description && <Error err="Description" />}

                <p className="flex gap-6 pt-3">
                    <input
                        type="button"
                        value="reset"
                        className="btn btn-outline btn-primary grow"
                        onClick={() => reset()}
                    />
                    <input
                        type="submit"
                        value="submit"
                        className={`btn btn-primary grow ${submitState}`}
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

export default Form
