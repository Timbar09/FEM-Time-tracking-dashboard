// import profilePhoto from '../assets/images/image-jeremy.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__bio">
        {/* <div className="header__bio--image"><img src={profilePhoto} alt="Jeremy Robson" /></div> */}
        <div className="header__bio--text">
          <h2 className="header__bio--text__title">Report for</h2>
          <h1 className="header__bio--text__name">Jeremy Robson</h1>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--list__item">Daily</li>
          <li className="header__nav--list__item">Weekly</li>
          <li className="header__nav--list__item">Monthly</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header