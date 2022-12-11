import { Link, useLocation } from "react-router-dom"

const MenuItem = ({ href, label }) => {
    const path = useLocation().pathname
    const isActive = href === path ? "bordered" : ""

    return (
        <li id={label} className={`${isActive}`}>
            <Link to={href}>
                {label}
            </Link>
        </li>
    )
}

export default MenuItem
