import { NavLink } from "react-router-dom"

export default function ActiveLastBreadcrumb({ section }) {
    return (
        <div className="flex gap-2 bg-[rgb(0,0,0,0.7)] text-white w-fit py-2 px-6 rounded-xl">
            <NavLink to="/" style={{ textDecoration: "underline" }}>
                Home
            </NavLink>
            <p>►</p>
            <p className="font-semibold">{section}</p>
        </div>
    )
}
