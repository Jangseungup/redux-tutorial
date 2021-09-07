import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Couter';
import { increase, decrease } from '../modules/counter';

// const CounterContainer = (props) => {
//     const { number, increase, decrease } = props;
//     console.log('props: ', props);
//     return <Counter number={number} onIncrease={increase} onDecrease={number <= 0 ? null : decrease} />;
// };

// useSelector & useDispatch
// useSelector(상태 선택적 함수) = mapStateToProps와 같다.
const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => {
        dispatch(increase());
    }, [dispatch]);
    const onDecrease = useCallback(() => {
        dispatch(decrease());
    }, [dispatch]);
    // return (
    //     <Counter number={number} onIncrease={() => dispatch(increase())} onDecrease={() => (number <= 0 ? null : dispatch(decrease()))} />
    // );
    return <Counter number={number} onIncrease={onIncrease} onDecrease={number <= 0 ? null : onDecrease} />;
};

const mapStateToPorps = (state) => {
    console.log('state : ', state);
    const { number } = state.counter;
    return {
        number,
    };
};

const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

// useSelector를 사용하면 connect을 사용하지 않고도 store에 있는 값을 가져올 수 있다.
// export default connect(mapStateToPorps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;
