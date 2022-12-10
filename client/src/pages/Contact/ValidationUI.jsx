import { CheckCircle } from "react-feather"
import { useSpring, animated, config, easings } from "@react-spring/web"

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
