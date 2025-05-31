import HeaderImg from "../components/HeaderImg"

export default function Videos() {
    return (
        <>
            <HeaderImg url={"/images/video-section.jpg"} section={"VIDEOS"} />
            <section className="flex flex-col md:flex-row gap-6 px-8 md:px-16 xl:px-70 2xl:px-96 mt-20 mb-20">
                <article className="w-full flex flex-col gap-6">
                    <div className="w-full relative pt-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[24px]"
                            src="https://www.youtube.com/embed/NFTKYTijJhI"
                            title="Mercy Laredo Montage"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full relative pt-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[24px]"
                            src="https://www.youtube.com/embed/6Ove9mbOlxk"
                            title="Mercy Laredo Diabetes"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="w-full relative pt-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[24px]"
                            src="https://www.youtube.com/embed/ivNeb-6gybQ"
                            title="Mercy Laredo Couple"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </article>
                <article className="w-full flex flex-col gap-6">
                    <div className="w-full relative pt-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[24px]"
                            src="https://www.youtube.com/embed/7XCznUWQb5Q"
                            title="Mercy Laredo Montage (Spanish)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="w-full relative pt-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[24px]"
                            src="https://www.youtube.com/embed/fuAB7Qb0OzA"
                            title="Mercy Laredo Diabetes (Spanish)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="w-full relative pt-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[24px]"
                            src="https://www.youtube.com/embed/Bn_4RNk-GxI"
                            title="Mercy Laredo Couple (Spanish)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </article>
            </section>
        </>
    )
}
