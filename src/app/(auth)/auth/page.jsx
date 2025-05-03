import LoginForm from "./components/LoginForm/LoginForm"


function Login() {
    return (
        <main className="bg-white text-[#1D1738]">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(/auth/login.jpg)" }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Trans AFAB Venezuela</h2>
                        </div>
                    </div>

                </div>
                <LoginForm />

            </div>
        </main>
    )
}

export default Login