import React, { useEffect } from "react";

function UserStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  })

  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  // useEffect에서 return 함수의 역할 = componentwillunmount 역할
  useEffect(() => {
    // 구독
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return() => {
      // 구독 해제
      // 컴포넌트가 unmount될 때 호출됨
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  });

  if(isOnline === null) {
    return '대기 중...';
  }
  return isOnline ? '온라인':'오프라인';
}

/**
 * @description: useEffect

이팩트함수와 의존성 배열이 들어감
useEffect(() => {
  // 컴포넌트가 마운트 된 이후,
  // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
  // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
  // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
  
  return () => {
    // 컴포넌트가 마운트 해제되기 전에 실행됨
  }
}, [의존성 변수1, 의존성 변수2, ...]);
*/
