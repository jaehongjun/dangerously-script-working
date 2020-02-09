import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import InnerHTML from "dangerously-set-html-content";
import InnerHTML from "./InnerHtml";

const result =
  "<!DOCTYPE html><html><head><title>Page Title</title><script>console.log('1')</script><!-- script>console.log('2')</script --></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <InnerHTML html={result}></InnerHTML>
    </div>
  );
}

export default App;
