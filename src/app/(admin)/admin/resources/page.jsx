import { getResourcesPerPage } from "@/DAO/resources.db"
import SearchBar from "../componets/SearchBar/SearchBar"
import Pagination from "../componets/Pagination/Pagination"
import ResourceAddBtn from "./components/ResourceAddBtn/ResourceAddBtn"
import ResourceTable from "./components/ResourceTable/ResourceTable"

const Resources = async ({ searchParams }) => {
    const { page } = searchParams
    let data = {}

    if (page) {
        data = await getResourcesPerPage(Number(page))
    } else {
        data = await getResourcesPerPage()
    }
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Recursos</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <ResourceAddBtn />
                    <SearchBar />
                </div>

                <ResourceTable data={data.list} />

                <Pagination data={data} />
            </main>
        </>
    )
}

export default Resources
