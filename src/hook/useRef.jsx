/**
 * @description: useRef
 * Reference를 사용하기 위한 Hook
 * Reference: 특정 컴포넌트에 접근할 수 있는 객체
 * Reference 객체를 반환한다.
 * refObject.current -> 현재 참조하고 있는 element
 */

import { useCallback } from "react";

// 해당 초기값으로 초기화된 reference 객체를 반환함
// 초기값이 null이면 current의 값이 null인 reference 객체가 반환됨
// 변경 가능한 current 속성을 가진 하나의 상자
// 내부의 데이터가 변경되었을 때 별도로 알리지 않는다.
// ---> current 속성을 변경한다 해서 재 렌더링이 일어나지 않음
// ---> dom 노드의 변화를 알기위해 callBack ref를 사용

const refContainer = useRef(초기값);

function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    // 'current'는 마운트된 input element를 가리킴
    inputElem.current.focus();
  };

  return (
    <>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonClick}>
        Focus the input
      </button>
    </>
  )
}

/**
 * @description: callBackRef
 * Reference를 사용하기 위한 Hook
 * Reference: 특정 컴포넌트에 접근할 수 있는 객체
 * Reference 객체를 반환한다.
 * refObject.current -> 현재 참조하고 있는 element
 * ref가 다른 노드에 연결될때마다 콜백을 호출함
 */

function MeasureExample(props) {
  const [height, setHeight] = useState(0);

  // 자식 컴포넌트가 변경되었을 때 알림을 받을 수 있음
  // [] 빈 배열은 h1 태그가 mount unmount 될때만 콜백함수가 호출되며, 재렌더링이 일어날땐 호출 X
  const measuredRef = useCallback(node => {
    if(node != null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measureRef}>안녕, 리액트</h1>
      <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.</h2>
    </>
  )
}
