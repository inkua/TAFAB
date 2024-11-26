import React from 'react'
import Navbar from './components/Navbar/Navbar'

function mainLayout({ children }) {
    return (
        <body>
            <Navbar />
            {children}
        </body>
    )
}

export default mainLayout
