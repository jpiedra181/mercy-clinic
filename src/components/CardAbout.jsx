import { Link } from "react-router-dom"

export default function CardAbout({ url, title, description, cta }) {
    return (
        <>
            <div>
                <img src={url} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {cta && (
                <div className="text-[#00a3c8]">
                    <Link to="/">► Read More...</Link>
                </div>
            )}
        </>
    )
}
