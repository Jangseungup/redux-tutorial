// const CHANGE_INPUT = 'todos/CHANGE_INPUT';
// const INSERT = 'todos/INSERT';
// const TOGGLE = 'todos/TOGGLE';
// const REMOVE = 'todos/REMOVE';

// let id = 3;
// export const changeInput = (text) => ({ type: CHANGE_INPUT, text });
// export const insert = (text) => ({
//     type: INSERT,
//     todos: { id: id++, text, done: false },
// });

// export const toggle = (id) => ({
//     type: TOGGLE,
//     id,
// });

// export const remove = (id) => ({
//     type: REMOVE,
//     id,
// });

// const initailState = {
//     input: '',
//     todos: [
//         {
//             id: 1,
//             text: '리덕스 기초 배우기',
//             done: true,
//         },
//         {
//             id: 2,
//             text: '리엑트와 리덕스 사용하기',
//             done: false,
//         },
//     ],
// };

// function todos(state = initailState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.text,
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todos),
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)),
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id),
//             };
//         default:
//             return state;
//     }
// }

// export default todos;

// redux-actions
import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (text) => text);
let id = 3;
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initailState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리엑트와 리덕스 사용하기',
            done: false,
        },
    ],
};

// const todos = handleActions(
//     {
//         [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
//         [INSERT]: (state, action) => ({ ...state, todos: state.todos.concat(action.payload) }),
//         [TOGGLE]: (state, action) => ({
//             ...state,
//             todos: state.todos.map((todo) => (todo.id !== action.payload ? { ...todo, done: !todo.done } : todo)),
//         }),
//         [REMOVE]: (state, action) => ({
//             ...state,
//             todos: state.todos.filter((todo) => todo.id !== action.payload),
//         }),
//     },
//     initailState
// );

//action.payload => 비구조화 할당
// const todos = handleActions(
//     {
//         [CHANGE_INPUT]: (state, { payload: text }) => ({ ...state, input: text }),
//         [INSERT]: (state, { payload: todo }) => ({ ...state, todos: state.todos.concat(todo) }),
//         [TOGGLE]: (state, { payload: id }) => ({
//             ...state,
//             todos: state.todos.map((todo) => (todo.id !== id ? { ...todo, done: !todo.done } : todo)),
//         }),
//         [REMOVE]: (state, { payload: id }) => ({
//             ...state,
//             todos: state.todos.filter((todo) => todo.id !== id),
//         }),
//     },
//     initailState
// );

// immer 사용
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: text }) =>
            produce(state, (draft) => {
                draft.input = text;
            }),
        [INSERT]: (state, { payload: todo }) =>
            produce(state, (draft) => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const todo = draft.todos.find((todo) => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const index = draft.todos.findIndex((todo) => todo.id === id);
                draft.todos.splice(index, 1);
            }),
    },
    initailState
);
export default todos;
