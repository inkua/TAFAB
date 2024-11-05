import { getAdmins } from "@/DAO/admins.db";
import BtnAdmin from "./components/BtnAdmin/BtnAdmin";
import TableAdmin from "./components/TableAdmin/TableAdmin";
import SearchBar from "../componets/SearchBar/SearchBar";
import Pagination from "../componets/Pagination/Pagination";

async function Admins() {
    let data = await getAdmins(); //usando el servicio del DAO

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Administradores</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <BtnAdmin />
                    <SearchBar />
                </div>

                <TableAdmin data={data} />

                <Pagination />
            </main>
        </>
    )
}

export default Admins
