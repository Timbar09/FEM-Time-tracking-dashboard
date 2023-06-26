import '../assets/styles/Header.scss'
import PropTypes from 'prop-types'
import profilePhoto from '../assets/images/image-jeremy.png'

const Header = ({ setDataType, dataType }) => {

  console.log('Header', dataType)
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
          <li className="header__nav--list__item"><button className={`btn ${dataType === 'daily' ? 'active' : ''}`} onClick={() => setDataType('daily')}>Daily</button></li>
          <li className="header__nav--list__item"><button className={`btn ${dataType === 'weekly' ? 'active' : ''}`} onClick={() => setDataType('weekly')}>Weekly</button></li>
          <li className="header__nav--list__item"><button className={`btn ${dataType === 'monthly' ? 'active' : ''}`} onClick={() => setDataType('monthly')}>Monthly</button></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  setDataType: PropTypes.func.isRequired,
  dataType: PropTypes.string.isRequired
}

export default Header