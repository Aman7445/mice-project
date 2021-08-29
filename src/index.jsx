import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { mice } from "./mice";
import Display from "./Display";
import SearchBox from "./searchbox";
import Navbar from "./Navbar";

function Greeting() {
  return (
    <div>
      <Navbar />
      <br />
      <h1 id="title">Mice Catalog</h1>
      {/* <SearchBox /> */}
      <div className="greet">
        {mice.map((bok) => {
          return <Display bok={bok}></Display>;
        })}
      </div>
    </div>
  );
}
ReactDom.render(<Greeting />, document.getElementById("root"));
