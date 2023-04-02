import Icon from '../images/app-launcher.svg'

const AppsLauncherIcon = () => {
    return (
        <div className='app-launcher-cont'>
            <a href="google.com">
                <img src={Icon} alt="apps launcher" style={{ width: "24px" }} className="app-launcher-svg" />
            </a>
        </div>
  )
}

export default AppsLauncherIcon