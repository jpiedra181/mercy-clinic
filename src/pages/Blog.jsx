import CardBlog from "../components/CardBlog"
import HeaderImg from "../components/HeaderImg"

export default function Blog() {
    return (
        <>
            <HeaderImg url={"/images/blog-section.jpg"} section={"BLOG"} />
            <section className="flex flex-col gap-12 items-center mt-20 mb-20 px-8 md:px-16 xl:px-70 2xl:px-96">
                <CardBlog
                    url={"/images/MercyMinistries.jpg"}
                    title={"Mercy Clinic Remains Open!"}
                    date={"Apr 28, 20"}
                    description={
                        "All services are open at Mercy Clinic. Healthcare providers, behavioral health consultants, nurse educators, social services, laboratory services and all other support services are available. Please call if you have"
                    }
                    link={"mercy-clinic-is-open"}
                    btn={true}
                />
                <CardBlog
                    url={"/images/Sisters-Mission.jpg"}
                    title={"Our New Website!"}
                    date={"Mar 07, 18"}
                    description={
                        "Welcome to the inaugural Mercy Clinic website! You can’t begin to imagine how long I’ve waited to state that. This brand new website is just one of many endeavors we have"
                    }
                    link={"welcome"}
                    btn={true}
                />
            </section>
        </>
    )
}
