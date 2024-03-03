import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", {id : "Parent"}, 
React.createElement("div", {id : "Child"},
[React.createElement("h1", {}, "Hello H1"), React.createElement("h2", {}, "Hello H2"), React.createElement("h3", {}, "Hello H3")]
));



// const heading = React.createElement("h1", { id: "heading" }, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
