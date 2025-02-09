import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Generic/Footer'
import { ToastProvider } from '@/utils/ToastProvider'

function mainLayout({ children }) {
    return (
        <body className="h-screen">
            <Navbar />
            {children}
            <Footer />
            <ToastProvider />
        </body>
    )
}

export default mainLayout
