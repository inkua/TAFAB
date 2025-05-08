import { getNewsPerPage } from "@/DAO/news.db"
import Pagination from "../componets/Pagination/Pagination"
import SearchBar from "../componets/SearchBar/SearchBar"
import NewAddBtn from "./components/NewAddBtn/NewAddBtn"
import NewTable from "./components/NewTable/NewTable"


const News = async ({ searchParams }) => {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getNewsPerPage(Number(page), 3)
    } else {
        data = await getNewsPerPage(1, 3)
    }

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Artículos</h1>
                </div>
            </header>
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <NewAddBtn />
                    <SearchBar />
                </div>

                <NewTable data={data.list} />

                <Pagination data={data} />
            </main>
        </>
    )
}

export default News
