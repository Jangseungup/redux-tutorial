import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, remove, toggle } from '../modules/todos';

const TodosContainer = (props) => {
    console.log('todos props', props);
    const { input, todos, changeInput, insert, toggle, remove } = props;
    return (
        <Todos {...props} input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
    );
};

// const mapStateToPorps = (state) => {
//     console.log('todos state', state);
//     const { input, todos } = state.todos;
//     return {
//         input,
//         todos,
//     };
// };

// const mapDispatchToProps = (dispatch) => ({
//     changeInput: (text) => dispatch(changeInput(text)),
//     insert: (text) => dispatch(insert(text)),
//     toggle: (id) => dispatch(toggle(id)),
//     remove: (id) => dispatch(remove(id)),
// });

// export default connect(mapStateToPorps, mapDispatchToProps)(TodosContainer);

export default connect(
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    }
)(TodosContainer);
