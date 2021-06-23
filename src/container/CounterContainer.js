import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // 스토어 상태롤 조회하는 hook
  const { number, diff } = useSelector(state => state.counter);

  // 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 hook
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return(
    <Counter
      // 상태
      number={number}
      diff={diff}
      // 액션 디스패치 함수
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;