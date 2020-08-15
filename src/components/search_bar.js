import React, { Component } from "react";

// 다른 component 와 소통할 수 있도록 단순한 함수가 아니라 class 로 선언.
// class 선언할 때는 render method 와 return 값을 줘야함
class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }
}

export default SearchBar;
