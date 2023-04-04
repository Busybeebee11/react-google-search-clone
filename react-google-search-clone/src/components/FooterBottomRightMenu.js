import FooterMenuItems from "./FooterMenuItems"

const FooterBottomRightMenu = () => {
  return (
    <div>
        <div className="right-menu-items">
            <FooterMenuItems title={"Privacy"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=ha&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBA"} />
            <FooterMenuItems title={"Terms"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=ig&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBE"} />
            <FooterMenuItems title={"Setting"} link={"https://www.google.com/setprefs?sig=0_hkloAz7tM1B4ZAD-oAwnxETFUBg%3D&amp;hl=yo&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjPwJffkI7-AhUgVKQEHQlHBM8Q2ZgBCBI"} />
        </div>
    </div>
  )
}

export default FooterBottomRightMenu