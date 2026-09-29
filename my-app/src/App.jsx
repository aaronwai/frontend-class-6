import Component from "./Component";
import "./css/App.css";

const App = () => {
   let counter = 1;
    return ( <div>
            <h1 className="title">Hello World</h1>
            <p>lorem ipsum</p>
            <p>counter : 1</p>
            <Component className="title" header="first level header" texts="first level content" counter={counter} />
            <Component header="second level header" texts="second level content" counter={++counter} />
        </div>
    )
}

export default App;