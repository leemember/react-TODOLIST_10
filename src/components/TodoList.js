import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem 
                todo={todo} 
                key={todo.id} 
                onRemove={onRemove} 
                onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default TodoList;

// TodoListItem를 불러왔다.
// 여기다가 기능도 추가하고 다양한 데이터도 전달한다.