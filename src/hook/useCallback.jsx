/**
 * @description: useCallback
 * 값이 아닌 함수를 반환
 * 의존성 배열의 값이 바뀌는 경우에만 함수를 새로 정의해서 리턴해줌

const memorizedCallback = useCallback(
  () => {
    doSomething(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);

// 동일한 역할임
- useCallback(함수, 의존성 배열);
- useMemo(() => 함수, 의존성 배열);

// [] 빈배열이기 때문에 컴포넌트가 처음 mount되는 시점에만 정의됨
const handleClick = useCallback((event) => {
  // 클릭 이벤트 처리
}, []);

*/