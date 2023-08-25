type inputtype = {
    inputValue: any
}

const Input = (props:inputtype) => {
    return (
    <input type="text"
    onChange={props.inputValue}
    />
    )
  }

export default Input
