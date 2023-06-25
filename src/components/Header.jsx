import '../assets/styles/Header.scss'
import profilePhoto from '../assets/images/image-jeremy.png'

const Header = ({ setDataType }) => {
  return (
    <header className="header">
      <div className="header__bio">
        <div><img className="header__bio--image" src={profilePhoto} alt="Jeremy Robson" /></div>
        <div className="header__bio--title">
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--list__item"><button className="btn" onClick={() => setDataType('daily')}>Daily</button></li>
          <li className="header__nav--list__item"><button className="btn" onClick={() => setDataType('weekly')}>Weekly</button></li>
          <li className="header__nav--list__item"><button className="btn" onClick={() => setDataType('monthly')}>Monthly</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header