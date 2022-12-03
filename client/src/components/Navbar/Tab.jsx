import { Link, useLocation } from "react-router-dom"

const Tab = ({ href, label }) => {
    const path = useLocation().pathname
    const isActive = href === path ? "tab-active !opacity-100" : ""

    return (
        <li className="menu__item outline-none">
            <Link
                to={href}
                className={`menu__link tab tab-lg tab-bordered std-transition text-shadow outline-none text-primary opacity-60 ${isActive} hover:opacity-100 hover:bg-accent-focus hover:bg-opacity-10 hover:rounded-t`}
            >
                {label}
            </Link>
        </li>
    )
}

export default Tab
