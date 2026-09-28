
const Component = (props) => {
    return React.createElement("div", {}, React.createElement(SubChild, props));
}
const SubChild = (props) => {
    return [React.createElement("h1", {}, props.header),
       React.createElement("p", {}, props.texts) 
    ];
}
const App = () => {
    return React.createElement(
        "div", {}, [React.createElement("h1", {}, "Hello World"), React.createElement("p", {}, "lorem ipsum"),React.createElement(Component, {header : "first level header", texts : "first level content"}), React.createElement(Component, {header : "second level header", texts : "second level content", texts : "second level content"})]
    );
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));