import { Link, NavLink, Outlet } from "react-router-dom"
import { ArrowRight, Menu } from "../components/Icons"
import MobileMenu from "../components/MobileMenu"

export default function Layout() {
    return (
        <>
            <section className="flex items-center justify-center py-2 text-[#e3e3e3] text-sm w-screen h-fit bg-[#252525] overflow-hidden">
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <span className="flex items-center gap-1">
                        <img src="/icons/phone.svg" alt="" className="w-4" />
                        (956) 718-6810
                    </span>
                    <span className="flex items-center gap-1">
                        <img src="/icons/clock.svg" alt="" className="w-4" />
                        7:30am - 5:00pm
                    </span>
                    <span className="flex items-center gap-1">
                        <img src="/icons/at-email.svg" alt="" className="w-4" />
                        diana.granados@mercy.net
                    </span>
                    <Link
                        className="flex items-center gap-1"
                        to={
                            "https://www.google.com/maps/place/Mercy+Ministries+of+Laredo/@27.4765396,-99.4819373,14.71z/data=!4m6!3m5!1s0x8661239057c4e175:0x3a2714903df21f47!8m2!3d27.4755979!4d-99.469995!16s%2Fg%2F1tg8723k?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                        }
                    >
                        <img src="/icons/location.svg" alt="" className="w-4" />
                        Find us on map
                    </Link>
                </div>
            </section>
            <header className="h-[80px] flex justify-between items-center bg-white overflow-hidden sticky top-0 z-10">
                <div
                    className="w-[50%] lg:w-[35%] flex items-center h-full bg-[#00a3c8] pl-8 md:pl-16 xl:pl-70 2xl:pl-96 py-1"
                    style={{
                        clipPath: "polygon(0 0%, 100% 0, 95% 100%, 0% 100%)",
                    }}
                >
                    <Link to={"/"} className="h-full">
                        <img
                            src="/images/Mercy_clinic_logo.png"
                            alt=""
                            className="h-[80%] md:h-full"
                        />
                    </Link>
                </div>
                <nav className="hidden lg:flex items-center md:text-sm lg:text-md pr-8 md:pr-16 xl:pr-70 2xl:pr-96 font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-[#00a3c8] font-bold px-4 py-2 rounded-xl"
                                : "text-[#00a3c8] hover:text-[#007f9c] px-4 py-2"
                        }
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-[#00a3c8] font-bold px-4 py-2 rounded-xl"
                                : "text-[#00a3c8] hover:text-[#007f9c] px-4 py-2"
                        }
                    >
                        ABOUT
                    </NavLink>
                    <NavLink
                        to="/videos"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-[#00a3c8] font-bold px-4 py-2 rounded-xl"
                                : "text-[#00a3c8] hover:text-[#007f9c] px-4 py-2"
                        }
                    >
                        VIDEOS
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-[#00a3c8] font-bold px-4 py-2 rounded-xl"
                                : "text-[#00a3c8] hover:text-[#007f9c] px-4 py-2"
                        }
                    >
                        BLOG
                    </NavLink>
                    <NavLink
                        to="/donations"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-[#00a3c8] font-bold px-4 py-2 rounded-xl"
                                : "text-[#00a3c8] hover:text-[#007f9c] px-4 py-2"
                        }
                    >
                        DONATIONS
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-[#00a3c8] font-bold px-4 py-2 rounded-xl"
                                : "text-[#00a3c8] hover:text-[#007f9c] px-4 py-2"
                        }
                    >
                        CONTACT
                    </NavLink>
                    <NavLink
                        to="https://mercycliniclaredo.net/wp-content/uploads/2020/03/jobs.pdf"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-[#00a3c8] font-bold px-4 py-2 rounded-xl"
                                : "text-[#00a3c8] hover:text-[#007f9c] px-4 py-2"
                        }
                    >
                        JOB LISTINGS
                    </NavLink>
                </nav>
                <div className="flex lg:hidden pr-8 md:pr-16 xl:pr-80 ">
                    <MobileMenu />
                </div>
            </header>
            <main className="overflow-hidden">
                <Outlet />
            </main>

            <footer className="text-white w-screen">
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between bg-[#252525] px-8 md:px-16 xl:px-70 2xl:px-96 gap-12 py-12 border-b-2 border-gray-500">
                    <article className="flex gap-0 flex-col">
                        <h3 className="font-bold">ABOUT MERCY CLINIC LAREDO</h3>
                        <img src="/icons/hr.png" alt="" className="w-12" />
                        <p>
                            Mercy Ministries of Laredo provides primary
                            healthcare services to the neediest residents of
                            Webb County who are looking for healthcare. Patients
                            are coached to become advocates of their own health.
                            Mercy is not a free clinic. Patients make co-pays
                            for their services based on the outcome of their
                            financial screening. Ninety nine percent of our
                            patients are uninsured and fall below federal
                            poverty guidelines. We believe in providing mercy to
                            all.
                        </p>
                    </article>
                    <article className="flex flex-col">
                        <h3 className="font-bold">USEFUL LINKS</h3>
                        <img src="/icons/hr.png" alt="" className="w-12" />
                        <ul className="flex flex-col gap-4 ">
                            <li className="">
                                <Link
                                    to={
                                        "https://mercycliniclaredo.net/wp-content/uploads/2020/03/jobs.pdf"
                                    }
                                >
                                    ► Job Listings
                                </Link>
                            </li>
                            <li className="">
                                <Link to={"https://casademisericordia.org/"}>
                                    ► Casa de Misericordia
                                </Link>
                            </li>
                            <li className="">
                                <Link to={"https://www.mhm.org/"}>
                                    ► Methodist Healthcare Ministries
                                </Link>
                            </li>
                            <li className="">
                                <Link to={"https://www.cityoflaredo.com/"}>
                                    ► City of Laredo
                                </Link>
                            </li>
                            <li className="">
                                <Link to={"https://laredoactiveliving.com/"}>
                                    ► Laredo Active living
                                </Link>
                            </li>
                            <li className="">
                                <Link to={"http://www.mrgbahec.org/"}>
                                    ► AHEC
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    to={
                                        "http://www.webbcountytx.gov/IndigentHealthCare/"
                                    }
                                >
                                    ► Indigent Healthcare
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    to={
                                        "https://dioceseoflaredo.org/catholic-charities-diocese-laredo"
                                    }
                                >
                                    ► Diocese of Laredo
                                </Link>
                            </li>
                        </ul>
                    </article>
                    <article className="flex flex-col">
                        <h3 className="font-bold">QUICK LINKS</h3>
                        <img src="/icons/hr.png" alt="" className="w-12" />
                        <ul className="flex flex-col gap-4">
                            <li className="">
                                <Link to={"/"}>► Home</Link>
                            </li>
                            <li className="">
                                <Link to={"/about"}>► About Us</Link>
                            </li>
                            <li className="">
                                <Link to={"/donations"}>► Donations</Link>
                            </li>
                            <li className="">
                                <Link to={"/videos"}>► Videos</Link>
                            </li>
                            <li className="">
                                <Link to={"/blog"}>► Blog</Link>
                            </li>
                            <li className="">
                                <Link to={"/contact"}>► Contact</Link>
                            </li>
                        </ul>
                    </article>
                    <article className="flex flex-col">
                        <h3 className="font-bold">NEWSLETTER SUBSCRIBE</h3>
                        <img src="/icons/hr.png" alt="" className="w-12" />
                        <form action="">
                            <label htmlFor="" className="flex flex-col gap-2">
                                Sign Up for Our Newsletter
                                <div className="flex gap-1">
                                    <input
                                        type="text"
                                        placeholder="Enter your email here..."
                                        className="flex justify-end px-4 py-2 bg-black max-w-[300px] rounded-xl"
                                    />
                                    <button className="px-2 py-2 bg-black w-fit rounded-xl">
                                        <ArrowRight />
                                    </button>
                                </div>
                            </label>
                        </form>
                    </article>
                </section>
                <section className="flex flex-col lg:flex-row items-center justify-center bg-[#252525] px-8 md:px-16 xl:px-70 2xl:px-96 gap-12 py-12 border-b-2 border-gray-500">
                    <div className="flex flex-col items-center gap-2 text-white">
                        <p className="flex gap-4 font-bold">
                            <img src="/icons/phone.svg" alt="" />
                            Call Us Anytime
                        </p>
                        <p>(956) 718-6810</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2 text-white">
                        <p className="flex gap-4 font-bold">
                            <img src="/icons/clock.svg" alt="" />
                            Opening Hours
                        </p>
                        <p>Monday - Friday 7:30 am - 5:00 pm (Lunes-Viernes)</p>
                        <p>
                            Night Clinic Every Tuesday 7:30 a.m. – 8:00 p.m.
                            (Clínica de Noche Cada martes)
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-white">
                        <p className="flex gap-4 font-bold">
                            <img src="/icons/at-email.svg" alt="" />
                            Email Us At
                        </p>
                        <p>diana.granados@mercy.net</p>
                    </div>
                </section>
                <section className="w-screen h-[50px] bg-[#222222]"></section>
            </footer>
        </>
    )
}
