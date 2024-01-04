import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import './globals.css'

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
