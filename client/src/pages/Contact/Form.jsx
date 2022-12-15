import { useEffect, useState, forwardRef, useImperativeHandle } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputMask from "react-input-mask"
import ValidationUI, { validationSchema } from "./components/Validation"
import "./Form.css"

const Form = forwardRef(({ submitForm }, ref) => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        setFocus,
        formState: { errors, dirtyFields, isSubmitting, isDirty, isValid },
    } = useForm({
        mode: "all",
        shouldFocusError: false,
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: "",
        },
    })

    useImperativeHandle(ref, () => ({
        reset,
    }))

    const onSubmit = async (data) => {
        const abortController = new AbortController()
        await submitForm(data)
        return () => {
            abortController.abort()
        }
    }

    return (
        <>
            <div className="card mx-auto my-6 shadow-box w-full max-w-sm">
                <h2 className="card-title pt-8 mx-auto">Contact</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
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
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    {...field}
                                    id="phone"
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    placeholder=" "
                                    mask="1 (999) 999-9999"
                                    maskPlaceholder=""
                                    className="input"
                                    name={field.name}
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
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
                                Project Details
                                <span className="text-xs">
                                    {" "}
                                    with year / make /model
                                </span>
                            </span>
                        </label>
                        <textarea
                            {...register("description")}
                            id="description"
                            className="textarea textarea-bordered h-24 pr-10"
                            placeholder=" "
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
            </div>
        </>
    )
})

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
