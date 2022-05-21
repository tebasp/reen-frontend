import NavBar from '@/components/NavBar.jsx'
import Footer from '@/components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div
      className="container max-w-full
     mx-auto"
    >
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
