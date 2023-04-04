import LanguageItems from "./LanguageItems";

import "../styles/languages.css"

const Languages = () => {
  return (
    <div className="languages-cont">
      <div className="languages-info">
        <div className="language-offered">
          Google offered in:
          <div className="language-item">
            <LanguageItems title={"Hausa"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=ha&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBA"} />
            <LanguageItems title={"Igbo"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=ig&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBE"} />
            <LanguageItems title={"Èdè Yorùbá"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=yo&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBI"} />
            <LanguageItems title={"Nigerian Pidgin"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=pcm&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBM"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Languages