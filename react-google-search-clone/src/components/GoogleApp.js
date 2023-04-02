import Header from "./Header";
import GoogleLogo from "./GoogleLogo";
import SearchForm from "./SearchForm";
import Languages from "./Languages";
import Footer from "./Footer";

const GoogleApp = () => {
    return (
        <div className="container">
            <Header />
            <GoogleLogo />
            <SearchForm />
            <Languages />
            <Footer />
        </div>
  )
}

export default GoogleApp