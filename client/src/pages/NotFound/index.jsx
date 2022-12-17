import Space404 from "./space404/404"
import { motion } from "framer-motion"

const NotFound = (props) => {
    props.useTitle("404")

    return (
        <motion.div key="notFound" {...props.motions}>
            <Space404 stay={false} />
        </motion.div>
    )
}

export default NotFound
