import NavBar from '@/components/NavBar.jsx'

export default function DefaultLayout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      <footer>
        <h1>Thi is the footer</h1>
      </footer>
    </>
  )
}
