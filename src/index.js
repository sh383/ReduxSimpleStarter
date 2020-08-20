import React, { Component } from "react";
import ReactDom from "react-dom";
// import dotenv from "react-native-dotenv";
// dotenv.config();

import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = process.env.API_KEY;

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector(".container")); // App 은 클래스, <App /> 인스턴스 호출
