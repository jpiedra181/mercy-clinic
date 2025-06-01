import { Link } from "react-router-dom"

export default function CardAbout({ url, title, description, cta }) {
    return (
        <>
            <div>
                <img src={url} alt="" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            {cta && (
                <div className="text-[#00a3c8] font-semibold">
                    <Link to="/">► READ MORE...</Link>
                </div>
            )}
        </>
    )
}
