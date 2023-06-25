import PropTypes from 'prop-types'
import '../assets/styles/Card.scss'

const Card = ({ data, dataType }) => {
  return (
    <li className='card'>Card</li>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  dataType: PropTypes.string.isRequired
}

export default Card