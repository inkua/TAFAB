"use client"

import NewImgModal from "../NewImgModal/NewImgModal"

const NewBtnImage = ({ imgUrl, open, setOpen, itemId }) => {
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

            <NewImgModal data={{ open, setOpen, imgUrl, itemId }} />
        </>
    )
}

export default NewBtnImage
