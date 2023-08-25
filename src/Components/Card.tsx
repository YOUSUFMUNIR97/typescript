type cardType = {
    cardValue:any[]
}

const Card = (props:cardType) => {
  return (
    <div className='card'>
      {props.cardValue}
    </div>
  )
}

export default Card
