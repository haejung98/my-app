/**
 * @description: useMemo
 * Memoized value를 리턴하는 Hook
 * 
 * 의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create 함수를 호출하여 결과값을 반환
 * 그렇지 않으면 기존 함수의 결과값을 그대로 반환
 * useMemo로 전달된 함수는 렌더링이 일어나는동안 실행된다.
 * -> 렌더링이 일어나는 동안 실행되서는 안될 작업을 useMemo에 넣어서 실행하면 안된다.

const memoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computedExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2] // 의존성 배열
);

// 의존성 배열을 넣지 않을 경우, 매 렌더링마다 create 함수가 실행 됨 -> 아무 의미 없음
const memoizedValue = useMemo(
  () => computedExpensiveValue(a,b)
);

// 의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출됨
const memoizedValue = useMemo(
  () => {
    return computedExpensiveValue(a,b);
  },
  []
);
*/
