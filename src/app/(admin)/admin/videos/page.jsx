import { getVideosPerPage } from "@/DAO/videos.db"
import SearchBar from "../componets/SearchBar/SearchBar"
import VideoAddBtn from "./components/VideoAddBtn/VideoAddBtn"
import VideoTable from "./components/VideoTable/VideoTable"
import Pagination from "../componets/Pagination/Pagination"


const Videos = async ({ searchParams }) => {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getVideosPerPage(Number(page))
    } else {
        data = await getVideosPerPage()
    }

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Videos</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <VideoAddBtn />
                    <SearchBar />
                </div>

                <VideoTable data={data.list} />

                <Pagination data={data} />

            </main>
        </>
    )
}

export default Videos
