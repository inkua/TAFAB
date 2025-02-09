import Link from "next/link"

const SeeLink = (url) => {
    return (
        <Link
            className="bg-btn-pink hover:bg-bth-blue text-text-dark py-2 px-6 uppercase underline font-bold"
            href={"https://www.youtube.com"}
            target="_blank"
            rel="noopener noreferrer">
            ver</Link>
    )
}

export default SeeLink
