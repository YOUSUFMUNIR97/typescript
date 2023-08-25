type selectype = {
    option: any[];
    label: string;
    selectchange: any
}



const Selected = (props:selectype) => {
  return (
    <div>
        <p>{props.label}</p>
        <select onChange={props.selectchange}>
            {props.option.map((x, i)=>{
                return(
                    <>
                    <option key = {i} value={x.value}>{x.displayName}</option>
                    </>
                )
            })}

        </select>
    </div>
  )
}

export default Selected