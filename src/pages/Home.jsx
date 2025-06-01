import ActionAreaCard from "../components/Card"
import CardSection from "../components/CardSections"
import ImageCarousel from "../components/Carousel"
import {
    Ambulance,
    ClipBoard,
    Clock,
    Desktop,
    Doctor,
    Female,
    Male,
    MedKit,
    Stethoscope,
    User,
    Users,
} from "../components/Icons"
import OpinionCard from "../components/OpinionCard"

export default function Home() {
    return (
        <>
            <article className="w-screen h-[500px] relative">
                <img
                    src="/images/hero-img-1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <h2 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl text-center px-20 bg-[rgb(0,0,0,0.2)]">
                    Compassionate Healthcare for Laredo & Webb County Since 1894
                </h2>
            </article>
            <article className="flex flex-wrap lg:flex-row justify-center items-center gap-12 mt-20 px-8 md:px-16 xl:px-70 2xl:px-96">
                <ActionAreaCard
                    url={"/images/services-img.jpg"}
                    title={"Our Services"}
                    description={
                        "Mercy Clinic provides integrated behavioral healthcare with primary care to low-income adults without health insurance. The services provided by Mercy Clinic are available to ..."
                    }
                    isSection={true}
                />
                <ActionAreaCard
                    url={"/images/about-us-img.jpg"}
                    title={"About Us"}
                    description={
                        "Mercy Clinic provides integrated behavioral healthcare with primary care to low-income adults without health insurance. En la Clínica de Mercy, ya se ofrecen Servicios Integrados de ..."
                    }
                    isSection={false}
                    page={"/about"}
                />
                <ActionAreaCard
                    url={"/images/contact-img.jpg"}
                    title={"Contact Us"}
                    description={
                        "Call 956.718.6810 to make an appointment or visit us at 2500 Zacatecas St. in south Laredo. Haga su cita hoy, llamando al 956.718.6810 o visítenos en la Calle Zacatecas 2500 ..."
                    }
                    isSection={false}
                    page={"/contact"}
                />
            </article>
            <article className="flex flex-col items-center gap-16 my-20 px-8">
                <CardSection
                    url={"/images/Sisters-Mission.jpg"}
                    title={"Our New Website!"}
                    description={
                        "Welcome to the inaugural Mercy Clinic website! You can’t begin to imagine how long I’ve waited to state that. This brand new website is just one of many endeavors we have"
                    }
                    page={"blog/welcome"}
                />
                <CardSection
                    url={"/images/MercyMinistries.jpg"}
                    title={"Mercy Clinic Remains Open!"}
                    description={
                        "All services are open at Mercy Clinic. Healthcare providers, behavioral health consultants, nurse educators, social services, laboratory services and all other support services are available. Please call if you have"
                    }
                    page={"blog/mercy-clinic-is-open"}
                />
                <article className="flex flex-col gap-4">
                    <iframe
                        maxwidth="800"
                        height="444"
                        src="https://www.youtube.com/embed/NFTKYTijJhI"
                        title="Mercy Laredo Montage"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        style={{ borderRadius: "24px" }}
                    ></iframe>
                    <p className="text-xl md:text-3xl text-center max-w-[800px] font-bold text-gray-400 leading-6 md:leading-12">
                        Contact us today at (956) 718-6810 or come see us at
                        2500 Zacatecas.
                    </p>
                </article>
            </article>
            <section className="w-screen h-fit relative">
                <div className="absolute -z-10 bottom-0 left-0 w-full">
                    <img
                        src="/images/background-img.png"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <article className="flex flex-col gap-4 items-center px-8 md:px-16 xl:px-70 2xl:px-96">
                    <h2
                        className="text-2xl md:text-3xl font-bold"
                        id="services"
                    >
                        OUR SERVICES
                    </h2>
                    <p className="text-center max-w-[750px]">
                        Dr. Leonides “Leo” Cigarroa, Jr., MD serves as the
                        Medical Director for the Family Nurse Practitioners and
                        Dr. Dagoberto I. Gonzalez serves as the Medical Director
                        for Women’s Wellness.
                    </p>
                    <img src="/icons/hr.png" alt="" />
                    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        <div className="flex gap-4">
                            <div>
                                <Stethoscope />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Primary Care Services
                                </h4>
                                <p className="text-sm">
                                    Servicios de Atención Primaria de Salud.
                                    Prevención, diagnóstico y tratamiento de
                                    enfermedades comunes y crónicas.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Female />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">Women’s Wellness</h4>
                                <p className="text-sm">
                                    Exámenes físicos anuales para la prevención
                                    de enfermedades crónicas. Exámenes clínicos
                                    para la detección temprana del cáncer de
                                    seno y cáncer cervicouterino.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Male />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">Men’s Wellness</h4>
                                <p className="text-sm">
                                    Exámenes físicos anuales para la prevención
                                    de enfermedades crónicas.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <User />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Integrated Behavioral Health Services in
                                    Primary Care
                                </h4>
                                <p className="text-sm">
                                    Servicios Integrados de Salud
                                    Emocional/Conductual en Atención Primaria.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Ambulance />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Mercy Mobile Clinic
                                </h4>
                                <p className="text-sm">Clínica móvil</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Doctor />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">Dental Clinic</h4>
                                <p className="text-sm">Clínica dental</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <MedKit />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Diabetes Care Program
                                </h4>
                                <p className="text-sm">
                                    Programa para el manejo de la Diabetes.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Desktop />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Nutrition & Exercise Classes
                                </h4>
                                <p className="text-sm">
                                    Clases de nutrición y de ejercicio
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Stethoscope />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Medication Assistance
                                </h4>
                                <p className="text-sm">
                                    Asistencia con medicamentos
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Clock />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">Specialty Care</h4>
                                <p className="text-sm">
                                    Citas con especialistas
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <ClipBoard />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Social Worker & Case Management
                                </h4>
                                <p className="text-sm">
                                    Servicios de Trabajo Social y Manejo de
                                    Casos.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Users />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold">
                                    Community Outreach
                                </h4>
                                <p className="text-sm">Promotoras</p>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col justify-center gap-6 mt-20">
                        <p className="text-2xl md:text-4xl text-[#00a3c8] text-center">
                            Notice of Privacy Practices
                        </p>
                        <p className="text-xl md:text-3xl text-center font-bold text-gray-400 leading-6 md:leading-12">
                            Contact us today at (956) 718-6810 or come see us at
                            2500 Zacatecas St.
                        </p>
                    </article>
                </article>
            </section>

            <section className="flex w-screen h-fit relative">
                <div
                    className="w-screen md:w-[55%] lg:w-[65%] flex flex-col items-start text-white h-full bg-[#242424] pl-8 md:pl-16 xl:pl-70 2xl:pl-96 py-8 pr-12 md:pr-24"
                    style={{
                        clipPath: "polygon(0 0%, 100% 0, 97% 100%, 0% 100%)",
                    }}
                >
                    <p>Why Choose Us?</p>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        3 Reasons Why You Should Choose Mercy Clinic Laredo
                    </h2>
                    <img src="/icons/hr.png" alt="" />
                    <article className="flex flex-col gap-8 max-w-[800px]">
                        <article className="flex gap-2">
                            <p className="text-7xl">1</p>
                            <div className="flex flex-col gap-2">
                                <p>Serving adults without medical insurance.</p>
                                <p>
                                    Mercy Clinic provides integrated behavioral
                                    healthcare with primary care to low-income
                                    adults without health insurance.
                                </p>
                            </div>
                        </article>
                        <article className="flex gap-2">
                            <p className="text-7xl">2</p>
                            <div className="flex flex-col gap-2">
                                <p>Over 124 Years of Experience</p>
                                <p>
                                    As the Sisters of Mercy before us, we have
                                    brought to life the healing ministry of
                                    Jesus through compassionate care and
                                    exceptional service since 1894.
                                </p>
                            </div>
                        </article>
                        <article className="flex gap-2">
                            <p className="text-7xl">3</p>
                            <div className="flex flex-col gap-2">
                                <p>Two Words: Respect & Dignity</p>
                                <p>
                                    We cherish each person as created in the
                                    image of God. We seek out and put the needs
                                    of others first with a particular concern
                                    for people who are economically poor.
                                </p>
                            </div>
                        </article>
                    </article>
                </div>

                <div className="hidden md:flex w-[60%] h-full absolute right-0 -z-10">
                    <img
                        src="/images/why-us.png"
                        alt=""
                        className="w-full h-full object-cover object-bottom"
                    />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center gap-2 mt-20 px-8 md:px-16 xl:px-70 2xl:px-96 bg-gradient-to-r from-blue-100 to-blue-300 py-12">
                <p>Our Sponsors</p>
                <h2 className="text-2xl md:text-3xl font-bold">
                    Thank You For Your Support!
                </h2>
                <img src="/icons/hr.png" alt="" />
                <article className="flex flex-wrap justify-center gap-8 md:gap-20">
                    <img
                        src="/images/sponsor-1.png"
                        alt=""
                        className="w-40 md:w-64"
                    />
                    <img
                        src="/images/sponsor-2.png"
                        alt=""
                        className="w-40 md:w-64"
                    />
                    <img
                        src="/images/sponsor-3.png"
                        alt=""
                        className="w-40 md:w-64"
                    />
                </article>
            </section>

            <section className="flex flex-col justify-center items-center gap-2 mt-20 px-8 md:px-16 xl:px-70 2xl:px-96 mb-20">
                <p>Don't Hear From Us Only</p>
                <h2 className="text-2xl md:text-3xl font-bold">
                    What People Say About Us
                </h2>
                <img src="/icons/hr.png" alt="" />
                <article>
                    <ImageCarousel />
                </article>
            </section>
        </>
    )
}
