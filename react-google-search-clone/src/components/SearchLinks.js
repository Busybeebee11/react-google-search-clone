const SearchLinks = () => {
    return (
        <div className="search-link-cont">
            <center>
                <input
                    type="submit"
                    name="btn"
                    value="Google Search"
                    aria-label="Google Search"
                    className="search-link"
                />

                <input
                    type="submit"
                    name="btn2"
                    value="I'm Feeling Lucky"
                    aria-label="I'm Feeling Lucky"
                    className="search-link"
                />
            </center>
        </div>
    );
};


export default SearchLinks