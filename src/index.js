import React from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = process.env.API_KEY;

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector(".container")); // App 은 클래스, <App /> 인스턴스 호출
