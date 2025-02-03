import Image from 'next/image'

function ProfileImage({ type }) {
    let imageUrl = "/admin/admin/admin.png"
    let color = "bg-blue-200"
    if (type === "root") {
        imageUrl = "/admin/admin/root.png"
        color = "bg-green-200"
    }
    return (
        <Image
            src={imageUrl}
            alt={`${type} avatar`}
            width={300}
            height={300}
            className={`h-16 w-16 rounded-full ${color}`}
        />
    )
}

export default ProfileImage
