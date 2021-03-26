import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    return (
        <>
            {props.todos.map((item, index) => {
                return (
                    <Todo
                        key={index}
                        todo={item}
                    />
                )
            })}
        </>
    );
}

export default Todos;