import Breadcrumbs from "./Breadcrumbs"

export default function HeaderImg({ url, section }) {
    return (
        <section className="relative h-[350px]">
            <div className="absolute top-0 bottom-0 left-0 right-0 -z-10">
                <img src={url} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-screen h-full flex flex-col justify-center items-center gap-6 bg-[rgb(0,0,0,0.2)]">
                <h2 className="text-6xl text-white font-bold text-center">
                    {section}
                </h2>
                <Breadcrumbs section={section} />
            </div>
        </section>
    )
}
