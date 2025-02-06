

const ConfirmDialog = ({ isModalOpen, onConfirm, onCancel }) => {
    return (
        <>
            {isModalOpen && (
                <div className="relative flex justify-center">

                    <div
                        className="fixed inset-0 z-10 overflow-y-auto" role="dialog"
                    >
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 ">
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" ariaHidden="true">&#8203;</span>

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-100 rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" width="200" height="200" viewBox="0 0 26 26">
                                            <path fill="currentColor" d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2zm4 0v12h2V10h-2z" />
                                        </svg>
                                    </div>

                                    <div className="mt-2 text-center sm:max-w-sm sm:w-full ">
                                        <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize" id="modal-title">Eliminar registro</h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Estás seguro de eliminar este registro? 
                                            <br/> Cambio irreversible.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 sm:flex sm:items-center sm:justify-end">
                                    <div className="sm:flex sm:items-center">
                                        <button
                                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500 md:mr-3"
                                            onClick={onConfirm}
                                        >
                                            Eliminar
                                        </button>

                                        <button
                                            className="w-full px-4 py-2 mt-2 text-sm font-medium  bg-white text-gray-800 capitalize border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                            onClick={onCancel}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>


    )
}

export default ConfirmDialog
