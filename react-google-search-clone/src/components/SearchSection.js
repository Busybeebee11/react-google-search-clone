import { useState } from "react";
import SearchIcon1 from "./SearchIcon1"
import SearchIcon2 from "./SearchIcon2"
import SearchLinks from "./SearchLinks"
import "../styles/searchsection.css"

const SearchSection = () => {

  // Use of state to submit and show search keyword under search bar
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchKeyword(event.target.elements.search.value);
    
    // Input field empty after serach word is entered
    event.target.elements.search.value = "";
  };

  return (
    <div className="search-sect-cont">
      <form onSubmit={handleSubmit} action="/search" method="GET" role="search">
        <div className="form-cont">
          <div className="search-area-cont">
            <div className="search-area">
              <SearchIcon1 />

              <div className="text-area">
                <input type="text" name="search" />
              </div>

              <SearchIcon2 />
            </div>
            
          </div>
          {/* Show the search key words under search bar */}
          {searchKeyword && <div className="search-keyword">{searchKeyword}</div>}
          <SearchLinks />
        </div>
      </form>
    </div>
  )
}

export default SearchSection