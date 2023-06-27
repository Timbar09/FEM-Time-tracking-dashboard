import PropTypes from 'prop-types'
import '../assets/styles/Card.scss'

const Card = ({ data, dataType }) => {
  const previousTitle = () => {
    switch (dataType) {
      case 'daily': return 'Yesterday'
      case 'weekly': return 'Last Week'
      case 'monthly': return 'Last Month'
      default: return 'Yesterday'
    }
  }

  const current = data.timeframes[dataType].current
  const previous = data.timeframes[dataType].previous

  return (
    <li className={`card ${data.title.toLowerCase().replace(' ', '-')}`}>
      <div className="card__content">
        <header className="card__header">
          <h2 className="card__header--title">{data.title}</h2>
          <svg className="card__header--ellipsis" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/></svg>
          {/* <img className="card__header--ellipsis" src={ellipsis} alt="ellipsis" /> */}
        </header>

        <div className="card__timeframe--grid">
          <span className="card__timeframe--current">{current === 1 ? `${current}hr` : `${current}hrs`}</span>
          <span className="card__timeframe--previous">{previousTitle()} - {previous === 1 ? `${previous}hr` : `${previous}hrs`}</span>
        </div>
      </div>
    </li>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  dataType: PropTypes.string.isRequired
}

export default Card