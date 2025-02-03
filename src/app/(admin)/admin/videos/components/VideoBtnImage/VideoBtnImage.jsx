"use client"

import VideoImgModal from "../VideoImgModal/VideoImgModal"

const VideoBtnImage = ({ imgUrl, open, setOpen, videoId }) => {
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                Imagen de miniatura
            </button>

            <VideoImgModal data={{ open, setOpen, imgUrl, videoId }} />
        </>
    )
}

export default VideoBtnImage
