import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true} />
            <span>{todo.text}</span>
            <button
                onClick={() => {
                    todo.done === true ? onRemove(todo.id) : alert('체크해주세요');
                }}
            >
                삭제
            </button>
        </div>
    );
};

const Todos = (props) => {
    console.log('Todo : ', props);
    const { input, onChangeInput, onInsert, onToggle, onRemove, todos } = props;
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    };

    const onChange = (e) => {
        onChangeInput(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
                ))}
            </div>
        </div>
    );
};

export default Todos;
