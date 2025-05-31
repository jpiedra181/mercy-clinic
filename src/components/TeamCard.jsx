export default function TeamCard({ url, title, description }) {
    return (
        <article className="flex flex-col gap-4">
            <img src={url} alt="" className="rounded-[24px]" />
            <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm italic text-gray-600">
                    Mercy Clinic Laredo
                </p>
            </div>
            <p className="text-gray-600">{description}</p>
        </article>
    )
}
