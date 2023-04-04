import SearchIcon1 from "./SearchIcon1"
import SearchIcon2 from "./SearchIcon2"
import SearchLinks from "./SearchLinks"
import "../styles/searchsection.css"

const SearchSection = () => {
  return (
    <div className="search-sect-cont">
      <form action="/search" method="GET" role="search">
        <div className="form-cont">
          <div className="search-area-cont">
            <div className="search-area">
              <SearchIcon1 />

              <div className="text-area">
                <input></input>
              </div>

              <SearchIcon2 />
            </div>
          </div>

          <SearchLinks />
        </div>
      </form>
    </div>
  )
}

export default SearchSection