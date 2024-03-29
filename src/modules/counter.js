// // 액션 타입 정의
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';

// // 액션 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// // 초기값 정의
// const initailState = {
//     number: 0,
// };

// // 리듀서 함수 만들기
// function counter(state = initailState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return { number: state.number + 1 };
//         case DECREASE:
//             return { number: state.number - 1 };
//         default:
//             return state;
//     }
// }

// export default counter;

// redux-actions
import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0,
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState
);

export default counter;
