import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Generic/Footer'

function mainLayout({ children }) {
    return (
        <body className="h-screen">
            <Navbar />
            {children}
            <Footer />
        </body>
    )
}

export default mainLayout
