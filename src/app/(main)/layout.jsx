import { ToastProvider } from '@/utils/ToastProvider'
import FooterContact from './components/FooterContact/FooterContact'
import Navbar from './components/Navbar/Navbar'

function mainLayout({ children }) {
    return (
        <body className="h-screen">
            <Navbar />
            {children}
            <FooterContact />
            <ToastProvider />
        </body>
    )
}

export default mainLayout
