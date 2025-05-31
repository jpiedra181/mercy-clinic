import { useState } from "react"

export default function Article({ en, es }) {
    const [language, setLanguage] = useState("en")

    const handleEnglish = () => {
        setLanguage("en")
    }

    const handleSpanish = () => {
        setLanguage("es")
    }

    return (
        <>
            <div className="flex gap-6 mb-6">
                <button
                    className={`px-6 py-2 rounded-xl border-2 border-[#00a3c8] text-[#00a3c8] cursor-pointer ${
                        language === "en" ? "bg-[#00a3c8] text-white" : ""
                    }`}
                    onClick={handleEnglish}
                >
                    English
                </button>
                <button
                    className={`px-6 py-2 rounded-xl border-2 border-[#00a3c8] text-[#00a3c8] cursor-pointer ${
                        language === "es" ? "bg-[#00a3c8] text-white" : ""
                    }`}
                    onClick={handleSpanish}
                >
                    Spanish
                </button>
            </div>
            <article>
                {language === "en" && (
                    <p className="text-sm text-gray-600">{en}</p>
                )}
                {language === "es" && (
                    <p className="text-sm text-gray-600">{es}</p>
                )}
            </article>
        </>
    )
}
