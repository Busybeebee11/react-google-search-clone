import Icon from '../images/avatar.jpg'

const Avatar = () => {
    return (
        <div className='avatar-cont'>
            <a href='google.com'>
                <img src={Icon} alt="avatar" style={{ width: "32px", borderRadius: "50%" }} />
            </a>
        </div>
  )
}

export default Avatar
