import NavBar from '@/components/NavBar.jsx'
import Footer from '@/components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div
      className="container max-w-full
     mx-auto"
    >
      <NavBar />
      <main className="px-2 sm:px-1">{children}</main>
      <Footer />
    </div>
  )
}
