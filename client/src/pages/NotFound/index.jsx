import Space404 from "react-space-404"
import { motion } from "framer-motion"
import "./NotFound.css"

const NotFound = (props) => {
    props.useTitle("404")

    return (
        <motion.div key="notFound" {...props.motions}>
            <Space404 />
        </motion.div>
    )
}

export default NotFound
