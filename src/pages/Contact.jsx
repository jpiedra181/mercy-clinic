import HeaderImg from "../components/HeaderImg"
import { Link } from "react-router-dom"
import {
    Facebook,
    Google,
    Pinterest,
    Twitter,
    Youtube,
} from "../components/Icons"
import Form from "../components/Form"

export default function Contact() {
    return (
        <>
            <HeaderImg
                url={"/images/contact-section.jpg"}
                section={"CONTACT US"}
            />
            <section className="flex flex-col lg:flex-row justify-between px-8 md:px-16 xl:px-70 2xl:px-96 mt-20 mb-20">
                <aside>
                    <div>
                        <p className="text-gray-600 font-bold">Contact Info.</p>
                        <h2 className="font-bold text-lg">Connect With Us</h2>
                    </div>
                    <img src="/icons/hr.png" alt="" />
                    <div className="flex flex-col gap-4 mb-10">
                        <p className="font-bold">Information</p>
                        <div className="text-gray-600 flex gap-2 items-center">
                            <img src="/icons/phone.svg" alt="" />
                            <p>(956)718-6810</p>
                        </div>
                        <div className="text-gray-600 flex gap-2 items-center">
                            <img src="/icons/mail.svg" alt="" />
                            <p>diana.granados@mercy.net</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold">Connect With Us</p>
                        <div className="text-gray-400 flex gap-2">
                            <div className="border-2 w-fit p-2 rounded-lg">
                                <Link>
                                    <Facebook />
                                </Link>
                            </div>
                            <div className="border-2 w-fit p-2 rounded-lg">
                                <Link>
                                    <Twitter />
                                </Link>
                            </div>
                            <div className="border-2 w-fit p-2 rounded-lg">
                                <Link>
                                    <Pinterest />
                                </Link>
                            </div>
                            <div className="border-2 w-fit p-2 rounded-lg">
                                <Link>
                                    <Google />
                                </Link>
                            </div>
                            <div className="border-2 w-fit p-2 rounded-lg">
                                <Link>
                                    <Youtube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
                <aside>
                    <div>
                        <p className="text-gray-600 font-bold">Contact Info.</p>
                        <h2 className="font-bold text-lg">Connect With Us</h2>
                    </div>
                    <img src="/icons/hr.png" alt="" />
                    <Form />
                </aside>
            </section>
            <section className="mt-20 mb-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.7964595100443!2d-99.47219018462478!3d27.475595382888425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8661239057c4e175%3A0x3a2714903df21f47!2sMercy%20Ministries%20of%20Laredo!5e0!3m2!1sen!2sus!4v1630335819133!5m2!1sen!2sus"
                    width="100%"
                    height={550}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>
        </>
    )
}
