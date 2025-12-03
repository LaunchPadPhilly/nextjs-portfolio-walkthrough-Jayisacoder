import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Jeremy Green - Portfolio',
  description: 'Portfolio of Jeremy Green, Launchpad Philly intern passionate about technology, hardware troubleshooting, and web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* TODO: Import and add your Navbar component here */}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        
        {/* TODO: Import and add your Footer component here */}
        <Footer />
      </body>
    </html>
  )
}
