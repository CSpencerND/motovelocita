import { useEffect, useState, useRef } from "react"
import { useForm, Controller, useFormState } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "./axios"
import "./Form.css"
import { IMaskInput } from "react-imask"
import { AlertCircle, CheckCircle } from "react-feather"
import { useSpring, animated, config, easings } from "@react-spring/web"

const Form = () => {
    const modalButtonRef = useRef(null)

    const schema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        email: yup
            .string()
            .required("Email is a required field")
            .email("Not a valid email"),
        phone: yup.string().required("Phone is a required field").min(14),
        description: yup
            .string()
            .required("Description is a required field")
            .min(20),
    })

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, dirtyFields, isSubmitting, isSubmitSuccessful },
    } = useForm({
        mode: "all",
        shouldFocusError: false /** BUG: Needed to prevent crash if phone is missing and auto-focused*/,
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: "",
        },
    })

    const [buttonLoading, setButtonLoading] = useState("")
    const [buttonTextLoading, setButtonTextLoading] = useState("")

    useEffect(() => {
        if (isSubmitting) {
            setButtonLoading("loading btn-accent btn-outline")
            setButtonTextLoading("")
        } else {
            setButtonLoading("")
            setButtonTextLoading("submit")
        }
    }, [isSubmitting])

    useEffect(() => {
        if (isSubmitSuccessful) {
            modalButtonRef.current.click()
            reset()
        }
        /**
         *  else {
         *      TODO: Add a something went wrong 😫 Please try again modal
         *  }
         */
    }, [isSubmitSuccessful])

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    const onSubmit = async (data) => {
        await sleep(2000)
        /**
         * TODO: On the backend, also send an email to the sender including their sent form
         */
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

                    {dirtyFields.name && !errors?.name && <ValidIcon />}
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
                    {dirtyFields.email && !errors?.email && <ValidIcon />}
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
                                className="input"
                            />
                        )}
                    />
                    {dirtyFields.phone && !errors?.phone && <ValidIcon />}
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
                        className="textarea textarea-bordered h-24 pr-10"
                        placeholder=" "
                        cols="28"
                        rows="5"
                        wrap="hard"
                    ></textarea>
                    {dirtyFields.description && !errors?.description && (
                        <ValidIcon />
                    )}
                    {errors?.description && (
                        <Error message={errors?.description?.message} />
                    )}
                </p>

                {/** Buttons */}
                <p className="flex gap-6">
                    <button
                        type="button"
                        className="btn btn-outline btn-primary"
                        onClick={() => reset()}
                    >
                        reset
                    </button>
                    <button
                        type="submit"
                        className={`btn btn-primary grow ${buttonLoading}`}
                    >
                        {buttonTextLoading}
                    </button>
                </p>
            </form>

            <label
                htmlFor="successModal"
                className="hidden"
                ref={modalButtonRef}
            >
                open modal
            </label>
            <SuccessModal />
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
}

// const ErrorIcon = () => {
//     const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
//     return (
//         <animated.span className="absolute right-0" style={springProps}>
//             <AlertCircle
//                 size={16}
//                 className="text-error absolute right-0 m-4"
//             />
//         </animated.span>
//     )
// }

const ValidIcon = () => {
    const springProps = useSpring({
        to: { opacity: 1, transform: "translateY(0)" },
        from: { opacity: 0, transform: "translateY(-4px)" },
        config: {
            ...config.wobbly,
            ...easings.easeInElastic,
            friction: 10,
            mass: 2,
            tension: 2000,
        },
    })
    return (
        <animated.span
            className="absolute right-0 my-[1.1rem] mx-4"
            style={springProps}
        >
            <CheckCircle size={16} className="text-success" />
        </animated.span>
    )
}

const SuccessModal = () => {
    return (
        <>
            <input type="checkbox" id="successModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-black/50 backdrop-blur-sm">
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

export default Form
