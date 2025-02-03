import Image from 'next/image'

function AdminImage({ data }) {
    let imageUrl = "/admin/admin/admin.png"
    let color = "bg-blue-200"
    if(data==="root"){
        imageUrl = "/admin/admin/root.png"
        color = "bg-green-200"
    }
    return (
        <Image
            src={imageUrl}
            alt={`${data} avatar`}
            width={100}
            height={100}
            className={`w-auto h-full ${color}`}
        />
    )
}

export default AdminImage
