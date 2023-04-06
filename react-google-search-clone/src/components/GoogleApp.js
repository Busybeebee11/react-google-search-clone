import Header from "./Header";
import GoogleLogoSection from "./GoogleLogoSection";
import SearchSection from "./SearchSection";
import LanguagesSection from "./LanguagesSection";
import Footer from "./Footer";

const GoogleApp = () => {

    return (
        <div className="container">
            <Header />
            <GoogleLogoSection />
            <SearchSection />
            <LanguagesSection />
            <Footer />
        </div>
  )
}

export default GoogleApp