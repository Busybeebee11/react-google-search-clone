import FooterMenuItems from "./FooterMenuItems"

const FooterBottomLeftMenu = () => {
  return (
      <div className="left-menu-items">
          <FooterMenuItems title={"About"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=ha&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBA"} />
          <FooterMenuItems title={"Advertising"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=ig&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBE"} />
          <FooterMenuItems title={"Business"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=yo&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBI"} />
          <FooterMenuItems title={"How Search works"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=pcm&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBM"} />
      </div>
  )
}

export default FooterBottomLeftMenu