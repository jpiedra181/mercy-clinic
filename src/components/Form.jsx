import { useRef } from "react"

export default function Form() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const subjectRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            subject: subjectRef.current?.value,
            message: messageRef.current?.value,
        }
        console.log(user)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-[600px] mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
        >
            <div className="flex gap-6">
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="name"
                    >
                        Name*
                    </label>
                    <input
                        ref={nameRef}
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00a3c8]"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="email"
                    >
                        Email*
                    </label>
                    <input
                        ref={emailRef}
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00a3c8]"
                        placeholder="you@example.com"
                        required
                    />
                </div>
            </div>

            <div>
                <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="subject"
                >
                    Subject
                </label>
                <input
                    ref={subjectRef}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00a3c8]"
                    placeholder="Subject"
                    required
                />
            </div>

            <div>
                <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="message"
                >
                    Message*
                </label>
                <textarea
                    ref={messageRef}
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00a3c8]"
                    placeholder="Your message..."
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-[#00a3c8] text-white py-2 px-4 rounded-md hover:bg-[#0091b2] transition duration-200 hover:cursor-pointer"
            >
                Send Message
            </button>
        </form>
    )
}
