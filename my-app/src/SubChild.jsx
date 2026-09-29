const SubChild = (props) => {
    return (
      <>
            <h1 className={props.className}>{props.header}</h1>
            <p>{props.texts}</p>
            <p>counter : {props.counter}</p>
      </>
    )
  
}

export default SubChild