import { Checkmark } from "./Checkmark"

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
            <span className="label-text-alt text-xs text-error ">
                {message}
            </span>
        </label>
    )
}

const ValidIcon = () => {
    return (
        <span className="absolute right-0 my-[1rem] mx-4">
            <Checkmark size="22px" />
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
