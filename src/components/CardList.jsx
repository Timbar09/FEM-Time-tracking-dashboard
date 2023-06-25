import Card from "./Card"

const CardList = ({ cardData, dataType }) => {

  return (
    <ul className="card__list">
      {cardData.map((data, index) => {
        <Card key={index} data={data} dataType={dataType} />
      })}
    </ul>
  )
}

export default CardList