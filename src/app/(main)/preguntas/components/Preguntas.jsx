'use client'

import { useState } from 'react'

const Preguntas = ({ list }) => {

    const [openIndex, setOpenIndex] = useState(null)

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="flex flex-col gap-4  overflow-hidden" role='list'>
            {list.map((faq, index) => (
                <div key={index} role='listitem'>
                    <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors flex gap-4"
                    >
                        <svg
                            className={`ml-1 h-8 w-8 transition-transform duration-200 stroke-secondary ${openIndex === index ? 'rotate-180' : ''
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl w-fit font-semibold text-text-dark">{faq.question}</span>
                    </button>
                    <div
                        className={`flex overflow-y-auto transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-52' : 'max-h-0'
                            }`}
                    >
                        <div className="p-4 bg-white relative">
                            <div className="absolute left-6 md:left-16 top-0 bottom-0 w-1 bg-tertiary" />
                            <p className="pl-8 md:pl-20 font-normal text-sm sm:text-base md:text-lg lg:text-xl">{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Preguntas
