import Footer from '@/components/Footer/Footer';
import './globals.css';
import NavLink from '@/components/Header/Navbar/Navbar';
import { Toaster } from "react-hot-toast";
import DragBot from '@/components/DragBot/DragBot';

export const metadata = {
  title: {
    default: 'Home Page || NEXT.Js',
    template: '%s || NEXT.Js'
  },
  description: 'Next.Js description'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavLink />
        <Toaster position="top-center" />
        {children}
        <DragBot />
        <Footer />
      </body>
    </html>
  )
}
