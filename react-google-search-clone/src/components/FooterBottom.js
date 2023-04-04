import FooterBottomLeftMenu from "./FooterBottomLeftMenu"
import FooterBottomCenterText from "./FooterBottomCenterText"
import FooterBottomRightMenu from "./FooterBottomRightMenu"

const FooterBottom = () => {
  return (
      <div className="footer-bottom-cont">
          <FooterBottomLeftMenu />
          <FooterBottomCenterText />
          <FooterBottomRightMenu />
      </div>
  )
}

export default FooterBottom