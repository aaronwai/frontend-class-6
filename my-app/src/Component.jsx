import SubChild from "./SubChild";
const Component = (props) => {
return (
  <div> 
    {/* <SubChild className={props.className} header={props.header} texts={props.texts} counter={props.counter}/> */}
    <SubChild {...props}/>
  </div>
)
    
}
export default Component;