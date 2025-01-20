'use client'

import { useState } from 'react'

const faqs = [
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatibus! Proin vulputate, quam sit amet pellentesque malesuada, mi lacus accumsan nisi, in blandit quam magna eu magna."
    },
    {
        question: "Consectetur adipiscing elit?",
        answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        question: "Nullam quis imperdiet augue vestibulum auctor ornare leo?",
        answer: "Nullam quis imperdiet augue, sit amet venenatis turpis. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh."
    },
    {
        question: "Vestibulum auctor ornare leo non suscipit magna interdum eu?",
        answer: "Vestibulum auctor ornare leo, non suscipit magna interdum eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
    },
    {
        question: "Curabitur pellentesque nibh nibh, at maximus ante fermentum sit?",
        answer: "Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque est mi, mattis ac interdum eu, tempus vel lacus. Sed do eiusmod tempor."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatibus! Proin vulputate, quam sit amet pellentesque malesuada, mi lacus accumsan nisi."
    },
    {
        question: "Maecenas vitae mattis tellus nullam quis imperdiet augue?",
        answer: "Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque."
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="flex flex-col lg:w-3/4 mx-auto px-mobile lg:px-tablet my-10">
            <h2 className="text-2xl text-center lg:text-start font-bold mb-6 text-primary">PREGUNTAS FRECUENTES</h2>
            <div className="flex flex-col gap-4 rounded-lg overflow-hidden">
                {faqs.map((faq, index) => (
                    <div key={index}>
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
                            <span className="text-xl w-fit font-semibold text-text-dark">{faq.question}</span>
                        </button>
                        <div
                            className={`flex overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-52' : 'max-h-0'
                                }`}
                        >
                            <div className="p-4 bg-white relative">
                                <div className="absolute left-16 top-0 bottom-0 w-1 bg-tertiary" />
                                <p className="pl-20 text-lg">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

