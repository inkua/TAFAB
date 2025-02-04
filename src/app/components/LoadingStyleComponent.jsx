import Image from "next/image"

const LoadingStyleComponent = () => {
    return (
        <main className="grid place-items-center w-full h-full min-">
            <Image
                className="w-[200px] lg:w-[300px]"
                src={"/assets/spinner.gif"}
                width={300} height={300}
                alt="Loading..." />
        </main>
    )
}

export default LoadingStyleComponent
