import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;

// element : 어떤 물체를 구성하는 성분, 리액트 앱을 구성하는 가장 작은 블록들, 화면에서 보이는 것들을 기술
// 리액트 elements는 자바스크립트 객체 형태로 존재

// React.createElement(
//   type,
//   [props],
//   [...children]
// )
// type: 리액트 컴포넌트, html태그 이름
// props: element의 속성(class='green' 일때 green)
// children: 자식 element
// 모든 컴포넌트가 createElement 함수를 통해 element로 변환된다.

// 리액트 엘리먼트는 immutable(불변성, 변하지 않는 성질)
// ===> elements 생성 후에는! children이나 attributes를 바꿀 수 없다.
// -> element를 업데이트하기 위해서는 새로!!! 만들어야함

// react element(리액트의 가상dom에 존재) != dom element(실제 브라우저dom에 존재)
// -> react lement가 rendering 되는 과정은 가상dom에서 실제dom으로 이동하는 과정

// props
// 붕어빵에 들어가는 재료들(팥, 슈크림, 고구마), 속성
// 컴포넌트에 전달할 다양한 정보를 담고있는 자바스크립트 객체
// 새로운 값을 컴포넌트에 전달하여 새로 element를 생성