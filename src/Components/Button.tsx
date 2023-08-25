type ButtonType = {
    ButtonValue:string;
    onClick:any
}

const Button = (props:ButtonType) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.ButtonValue}</button>
    </div>
  )
}

export default Button
