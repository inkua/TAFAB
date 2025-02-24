import Link from "next/link"

const SeeLink = ({link}) => {
    return (
        <Link
            className="font-bold underline mt-4 text-sm hover:text-btn-purple"
            href={link||""}
            target="_blank"
            rel="noopener noreferrer">
            Ver video
        </Link>
    )
}

export default SeeLink
