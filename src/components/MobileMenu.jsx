import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "./Icons"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <>
            {/* Menu Button */}
            <button
                className="text-2xl p-2"
                onClick={toggleMenu}
                aria-label="Open menu"
            >
                <Menu />
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[rgb(255,255,255,0.9)] bg-opacity-50 z-40"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Modal Content */}
            {isOpen && (
                <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg p-6 space-y-6">
                    <button
                        className="text-right text-2xl w-full"
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>

                    <nav className="flex flex-col gap-6 text-xl font-semibold">
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>
                        <Link to="/about" onClick={closeMenu}>
                            About
                        </Link>
                        <Link to="/videos" onClick={closeMenu}>
                            Videos
                        </Link>
                        <Link to="/blog" onClick={closeMenu}>
                            Blog
                        </Link>
                        <Link to="/donations" onClick={closeMenu}>
                            Donations
                        </Link>
                        <Link to="/contact" onClick={closeMenu}>
                            Contact
                        </Link>
                        <Link
                            to="https://mercycliniclaredo.net/wp-content/uploads/2020/03/jobs.pdf"
                            onClick={closeMenu}
                        >
                            Job Listings
                        </Link>
                    </nav>
                </div>
            )}
        </>
    )
}
