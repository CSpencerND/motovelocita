import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema, axios, submitForm } from "./formUtils"
import { IMaskInput } from "react-imask"
import SubmissionModal from "./Modals"
import ValidationUI from "./ValidationUI"
import "./Form.css"

const Form = () => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        setFocus,
        formState: {
            errors,
            dirtyFields,
            isSubmitting,
            isSubmitSuccessful,
            isSubmitted,
            isDirty,
            isValid,
        },
    } = useForm({
        mode: "all",
        shouldFocusError: false /** BUG: Needed to prevent crash if phone is missing and auto-focused */,
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: "",
        },
    })

    useEffect(() => {
        setFocus("name")
    }, [])

    return (
        <div className="card mx-auto my-6 shadow-box w-full max-w-sm">
            <h2 className="card-title pt-8 mx-auto">Contact</h2>
            <form
                onSubmit={handleSubmit(submitForm)}
                className="card-body pt-6"
            >
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
                    <ValidationUI
                        dirtyField={dirtyFields?.name}
                        error={errors?.name}
                        message={errors?.name?.message}
                    />
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
                    <ValidationUI
                        dirtyField={dirtyFields?.email}
                        error={errors?.email}
                        message={errors?.email?.message}
                    />
                </p>

                {/** Phone */}
                <p className="form-control">
                    <label htmlFor="phone" className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <Controller
                        /** FIX: See how you can set a ref on this, or it's child, so you can allow focus on error.
                         *  Possibly do it manually with setFocus.
                         */
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
                    <ValidationUI
                        dirtyField={dirtyFields?.phone}
                        error={errors?.phone}
                        message={errors?.phone?.message}
                    />
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
                    <ValidationUI
                        dirtyField={dirtyFields?.description}
                        error={errors?.description}
                        message={errors?.description?.message}
                    />
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
                    <SubmitButton
                        isSubmitting={isSubmitting}
                        isDirty={isDirty}
                        isValid={isValid}
                    />
                </p>
            </form>

            <SubmissionModal
                isSubmitted={isSubmitted}
                isValid={isValid}
                isSubmitSuccessful={isSubmitSuccessful}
                reset={reset}
            />
        </div>
    )
}

const SubmitButton = ({ isSubmitting, isDirty, isValid }) => {
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

    return (
        <button
            type="submit"
            disabled={!isDirty || !isValid}
            className={`btn btn-primary grow ${buttonLoading}`}
        >
            {buttonTextLoading}
        </button>
    )
}

export default Form
