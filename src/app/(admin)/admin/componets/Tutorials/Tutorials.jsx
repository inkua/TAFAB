"use client"

import TutorialItem from "./TutorialItem/TutorialItem"

const Tutorials = () => {
    return (
        <section className="bg-white mt-4 rounded-md">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">Tutoriales</h1>

                <div className="mt-8 space-y-8 lg:mt-12">
                    <TutorialItem 
                        title="Lógica administradores" 
                        videoUrl="https://www.youtube.com/embed/SmJ50BWYIL8?si=t4tTpke8o6IBmXyp"
                    />
                    <TutorialItem 
                        title="Gestión de eventos, videos y recursos" 
                        videoUrl="https://www.youtube.com/embed/EXlrBdS0K6A?si=xoGk36G7vrMOxTbi"
                    />
                    <TutorialItem 
                        title="Gestión de Artículos" 
                        videoUrl="https://www.youtube.com/embed/SUUHBYYW6mg?si=H4h4BKNFBfpHznwY"
                    />

                </div>
            </div>
        </section>
    )
}

export default Tutorials
