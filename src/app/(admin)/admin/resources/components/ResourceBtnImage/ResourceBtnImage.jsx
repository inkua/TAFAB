"use client"

import ResourceImgModal from "../ResourceImgModal/ResourceImgModal"

const ResourceBtnImage = ({ imgUrl, open, setOpen, resourceId }) => {
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                Imagen
            </button>

            <ResourceImgModal data={{ open, setOpen, imgUrl, resourceId }} />
        </>
    )
}

export default ResourceBtnImage
