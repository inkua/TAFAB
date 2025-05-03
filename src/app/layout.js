import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trans AFAB Venezuela",
  description: "Descubre cómo TAFAB trabaja por la dignidad, derechos y bienestar de la población trans en Venezuela. Un lugar de encuentro, asistencia y visibilidad.",
  applicationName: 'Trans AFAB Venezuela',
  type: 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-VE" className={inter.className}>
      {children}
    </html>
  );
}
