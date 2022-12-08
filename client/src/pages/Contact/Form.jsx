import { useEffect, useState } from "react"
import { useForm, Controller, useFormState } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "./axios"
import "./Form.css"
import { IMaskInput } from "react-imask"
import { AlertCircle, CheckCircle } from "react-feather"

const Form = () => {
    const REGISTER_URL = "/send"

    const schema = yup.object().shape({
        name: yup
            .string()
            .matches(/[A-Za-z]/, "Name must only contain letters")
            .min(4)
            .required("Name is a required field"),
        email: yup
            .string()
            .email("Not a valid email")
            .required("Email is a required field"),
        phone: yup.string().min(14).required("Phone is a required field"),
        description: yup
            .string()
            .min(20)
            .required("Description is a required field"),
    })

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {
            errors,
            isDirty,
            dirtyFields,
            isValid,
            isSubmitting,
            isSubmitSuccessful,
        },
    } = useForm({
        mode: "all",
        shouldFocusError: false /** BUG: Needed to prevent crash if phone is empty */,
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: "",
        },
    })

    const [buttonDisabled, setButtonDisabled] = useState("")
    const [cursorAllowed, setCursorAllowed] = useState("")
    const [buttonLoading, setButtonLoading] = useState("")
    const [buttonTextLoading, setButtonTextLoading] = useState("")

    useEffect(() => {
        if (isValid) {
            setButtonDisabled("")
            setCursorAllowed("")
        } else {
            setButtonDisabled("btn-disabled bg-base-100 text-accent")
            setCursorAllowed("cursor-not-allowed")
        }
    }, [isValid])

    useEffect(() => {
        if (isSubmitting) {
            setButtonLoading("loading")
            setButtonTextLoading("")
        } else {
            setButtonLoading("")
            setButtonTextLoading("submit")
        }
    }, [isSubmitting])

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    const onSubmit = async (data) => {
        await sleep(2000)
        console.log(isSubmitting)
        console.log(data)
        console.log(isSubmitting)
    }

    return (
        <div className="card mx-auto my-6 shadow-box w-full max-w-sm">
            <h2 className="card-title pt-8 mx-auto">Contact</h2>
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

                    {dirtyFields.name &&
                        (errors?.name ? (
                            <AlertCircle
                                size={16}
                                className="text-error absolute right-0 m-4"
                            />
                        ) : (
                            <CheckCircle
                                size={16}
                                className="text-success absolute right-0 m-4"
                            />
                        ))}
                    {errors?.name && <Error message={errors?.name?.message} />}
                </p>

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
                    {dirtyFields.email &&
                        (errors?.email ? (
                            <AlertCircle
                                size={16}
                                className="text-error absolute right-0 m-4"
                            />
                        ) : (
                            <CheckCircle
                                size={16}
                                className="text-success absolute right-0 m-4"
                            />
                        ))}
                    {errors?.email && (
                        <Error message={errors?.email?.message} />
                    )}
                </p>

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
                    {dirtyFields.phone &&
                        (errors?.phone ? (
                            <AlertCircle
                                size={16}
                                className="text-error absolute right-0 m-4"
                            />
                        ) : (
                            <CheckCircle
                                size={16}
                                className="text-success absolute right-0 m-4"
                            />
                        ))}
                    {errors?.phone && (
                        <Error message={errors?.phone?.message} />
                    )}
                </p>

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
                    {dirtyFields.description &&
                        (errors?.description ? (
                            <AlertCircle
                                size={16}
                                className="text-error absolute right-0 m-4"
                            />
                        ) : (
                            <CheckCircle
                                size={16}
                                className="text-success absolute right-0 bottom-0 m-4"
                            />
                        ))}
                    {errors?.description && (
                        <Error message={errors?.description?.message} />
                    )}
                </p>

                {/** Buttons */}
                <p className="flex gap-6">
                    <span className="w-full">
                        <button
                            type="button"
                            className="btn btn-outline btn-primary btn-block"
                            onClick={() => reset()}
                        >
                            reset
                        </button>
                    </span>
                    <span className={`w-full ${cursorAllowed}`}>
                        <button
                            type="submit"
                            className={`btn btn-primary btn-block ${buttonDisabled} ${buttonLoading}`}
                        >
                            {buttonTextLoading}
                        </button>
                    </span>
                </p>
            </form>
        </div>
    )
}

const Error = ({ message }) => {
    return (
        <label className="px-1">
            <span className="label-text-alt text-xs text-error ">
                {message}
            </span>
        </label>
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
