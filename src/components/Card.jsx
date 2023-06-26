// import { useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/Card.scss'
import ellipsis from '../assets/images/icon-ellipsis.svg'

const Card = ({ data, dataType }) => {
  const previousTitle = () => {
    switch (dataType) {
      case 'daily': return 'Yesterday'
      case 'weekly': return 'Last Week'
      case 'monthly': return 'Last Month'
      default: return 'Yesterday'
    }
  }

  return (
    <li className={`card ${data.title.toLowerCase().replace(' ', '-')}`}>
      <div className="card__content">
        <header className="card__header">
          <h2 className="card__header--title">{data.title}</h2>
          <img className="card__header--ellipsis" src={ellipsis} alt="ellipsis" />
        </header>

        <div className="card__timeframe--grid">
          <span className="card__timeframe--current">{data.timeframes[dataType].current}hrs</span>
          <span className="card__timeframe--previous">{previousTitle()} - {data.timeframes[dataType].previous}hrs</span>
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