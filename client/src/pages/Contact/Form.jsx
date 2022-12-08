import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "./axios"
import "./Form.css"
import { IMaskInput } from "react-imask"

const Form = () => {
    const REGISTER_URL = "/send"

    const [submitState, setSubmitState] = useState("cursor-not-allowed")

    const schema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        email: yup
            .string()
            .email("Not a valid email")
            .required("Email is a required field"),
        phone: yup.string().required("Phone is a required field"),
        description: yup.string().required("Description is a required field"),
    })

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        shouldFocusError: false, /** BUG: Needed to prevent crash if phone is empty */
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="card mx-auto my-6 shadow-box w-full max-w-sm">
            <h2 className="card-title pt-8 mx-auto">By appointment only</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-6">
                {/** Name */}
                <p className="form-control">
                    <label htmlFor="name" className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        {...register("name")}
                        id="name"
                        type="text"
                        inputMode="text"
                        autoComplete="name"
                        placeholder=" "
                        className="input"
                    />
                </p>
                {errors?.name && <Error message={errors?.name?.message} />}

                {/** Email */}
                <p className="form-control">
                    <label htmlFor="email" className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email")}
                        id="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder=" "
                        className="input"
                    />
                </p>
                {errors?.email && <Error message={errors?.email?.message} />}

                {/** Phone */}
                <p className="form-control">
                    <label htmlFor="phone" className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <IMaskInput
                                {...field}
                                id="phone"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel"
                                placeholder=" "
                                mask="(000) 000-0000"
                                // lazy={false}
                                // placeholderChar=" "
                                className="input"
                            />
                        )}
                    />
                </p>
                {errors?.phone && <Error message={errors?.phone?.message} />}

                {/** Description */}
                <p className="form-control">
                    <label htmlFor="description" className="label">
                        <span className="label-text">
                            Project Description - Year / Make / Model
                        </span>
                    </label>
                    <textarea
                        {...register("description")}
                        id="description"
                        className="textarea textarea-bordered h-24"
                        placeholder=" "
                    ></textarea>
                </p>
                {errors?.description && (
                    <Error message={errors?.description?.message} />
                )}

                {/** Buttons */}
                <p className="flex gap-6">
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

const Error = ({ message }) => {
    return (
        <div className="badge badge-error gap-2 !-mt-8 z-10 bg-opacity-75">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current inline-block h-4 w-4"
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
            <span className="text-xs">{message}</span>
        </div>
    )

    // return (
    //     <div className="alert alert-error shadow-box py-2 pl-0 !-my-4">
    //         <div>
    //             <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="stroke-current flex-shrink-0 h-4 w-4"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //             >
    //                 <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     strokeWidth="2"
    //                     d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    //                 />
    //             </svg>
    //             <span className="text-xs">{message}</span>
    //         </div>
    //     </div>
    // )

    // <p className="form-control">
    //     <span className="flex">
    //         <label className="input-group">
    //             <span className="px-1 py-2.5 bg-accent/20 text-base-200">
    //                 (
    //             </span>
    //             <input
    //                 {...register("phone")}
    //                 // mask="(000) 000-0000"
    //                 id="phone"
    //                 type="tel"
    //                 inputMode="tel"
    //                 autoComplete="tel"
    //                 maxLength={3}
    //                 placeholder=" "
    //                 className="input !rounded-none !w-[70px]"
    //             />
    //             <span className="px-1 py-2.5 bg-accent/20 text-base-200 !rounded-none">
    //                 )
    //             </span>
    //         </label>
    //         <input
    //             {...register("phone")}
    //             // mask="(000) 000-0000"
    //             id="phone"
    //             type="tel"
    //             inputMode="tel"
    //             autoComplete="tel"
    //             maxLength={3}
    //             placeholder=" "
    //             className="input !rounded-none !w-[70px]"
    //         />
    //         <label className="input-group">
    //             <span className="px-1 py-2.5 bg-accent/20 text-base-200 !rounded-none">
    //                 -
    //             </span>
    //             <input
    //                 {...register("phone")}
    //                 // mask="(000) 000-0000"
    //                 id="phone"
    //                 type="tel"
    //                 inputMode="tel"
    //                 autoComplete="tel"
    //                 maxLength={4}
    //                 placeholder=" "
    //                 className="input !rounded-l-none !w-[153px]"
    //             />
    //         </label>
    //     </span>
    // </p>
}

export default Form
