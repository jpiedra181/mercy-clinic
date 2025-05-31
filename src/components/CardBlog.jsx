import { Link } from "react-router-dom"
import { SmallClock, SmallUser } from "./Icons"

export default function CardBlog({ url, title, date, description, link, btn }) {
    return (
        <article className="flex flex-col gap-4 max-w-[800px]">
            <div className="h-[300px]">
                <img
                    src={url}
                    alt=""
                    className="rounded-[24px] w-full h-full object-cover"
                />
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-1">
                    <SmallUser />
                    <p className="text-sm italic">Mercy Clinic Laredo</p>
                </div>
                <div className="flex items-center gap-1">
                    <SmallClock />
                    <p className="text-sm italic">{date}</p>
                </div>
            </div>
            <p>{description}</p>
            {btn && (
                <button className="border-2 border-gray-400 text-gray-500 px-8 py-2 rounded-full w-fit hover:border-[#00a3c8] hover:bg-[#00a3c8] hover:text-white">
                    <Link to={link}>READ MORE</Link>
                </button>
            )}
        </article>
    )
}
