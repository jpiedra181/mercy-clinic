import HeaderImg from "../components/HeaderImg"

export default function Donations() {
    const handleClick = () => {
        window.location.href =
            "https://mercyhealthfoundation.net/mercycliniclaredo"
    }
    return (
        <>
            <HeaderImg
                url={"/images/donate-section.jpg"}
                section={"DONATIONS"}
            />
            <section className="flex flex-col justify-center items-center gap-12 mt-20 mb-20 w-screen">
                <h3 className="text-3xl text-gray-600">
                    Donate Now and help change Lives
                </h3>
                <button
                    className="px-8 py-2 bg-[#00a3c8] w-fit text-white font-bold rounded-full cursor-pointer"
                    onClick={handleClick}
                >
                    DONATE
                </button>
                <p>
                    To donate to Mercy Clinic Laredo click the Donate button.
                    You will be redirected to a secure site. Thank you for your
                    support.
                </p>
            </section>
        </>
    )
}
