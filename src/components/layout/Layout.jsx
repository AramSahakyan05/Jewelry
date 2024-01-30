import "../../index.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Layout.scss";
const Layout = ({children}) => {
return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
