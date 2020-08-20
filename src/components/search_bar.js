import React, { Component } from "react";

// 다른 component 와 소통할 수 있도록 단순한 함수가 아니라 class 로 선언.
// class 선언할 때는 render method 와 return 값을 줘야함
class SearchBar extends Component {
  // functional components 는 state 가 없다. Only class-bassed components
  // constructor 는 class 의 new instance 가 생성될 때마다 호출되는 함수. Initializing variables & state 등등
  constructor(props) {
    super(props); // parent class 에서 정의된 method 를 정의할 때 (Component) super 사용

    this.state = { term: " " }; // component 를 update 하고 싶으면 state 을 떠올려라
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
