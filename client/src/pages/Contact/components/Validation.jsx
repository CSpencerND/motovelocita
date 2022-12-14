import { Checkmark } from "./Checkmark"
import * as yup from "yup"

export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field")
        .matches(/^\b\w+\b\s\b\w+\b/, "Must contain first and last name"),
    email: yup
        .string()
        .required("Email is a required field")
        .email("Must be a valid email"),
    phone: yup
        .string()
        .required("Phone is a required field")
        .matches(
            /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
            "Phone must include area code plus 7 digits"
        ),
    description: yup
        .string()
        .required("Description is a required field")
        .min(20),
})

const ValidationUI = ({ dirtyField, error, message }) => {
    return (
        <>
            {dirtyField && !error && <ValidIcon />}
            {error && <Error message={message} />}
        </>
    )
}

const Error = ({ message }) => {
    return (
        <label className="px-1">
            <span role="alert" className="label-text-alt text-xs text-error ">
                {message}
            </span>
        </label>
    )
}

const ValidIcon = () => {
    return (
        <span role="status" className="absolute right-0 my-[1rem] mx-4">
            <Checkmark size="22px" />
            <span className="sr-only">Input is valid</span>
        </span>
    )
}

// export const ErrorIcon = () => {
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

export default ValidationUI
